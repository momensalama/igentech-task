import { API_ENDPOINT } from "@/constants";
import { ServicePill } from "@/types";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useServicePills = () => {
  const [servicePills, setServicePills] = useState<ServicePill[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleServiceClick = useCallback((clickedIndex: number) => {
    setServicePills((prevServices) =>
      prevServices.map((service, index) => ({
        ...service,
        activeService: index === clickedIndex,
      }))
    );
  }, []);

  const activeIndex = useMemo(
    () => servicePills.findIndex((pill) => pill.activeService),
    [servicePills]
  );

  const handleNextService = useCallback(() => {
    if (activeIndex < servicePills.length - 1) {
      handleServiceClick(activeIndex + 1);
    }
  }, [activeIndex, servicePills.length, handleServiceClick]);

  const handlePreviousService = useCallback(() => {
    if (activeIndex > 0) {
      handleServiceClick(activeIndex - 1);
    }
  }, [activeIndex, handleServiceClick]);

  const navigationState = useMemo(
    () => ({
      isPreviousDisabled: activeIndex <= 0,
      isNextDisabled: activeIndex >= servicePills.length - 1,
    }),
    [activeIndex, servicePills.length]
  );

  const fetchServicePills = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch(API_ENDPOINT);

      if (!response.ok) {
        throw new Error(`Failed to fetch services: ${response.statusText}`);
      }

      const data = await response.json();

      if (!data?.data?.services) {
        throw new Error("Invalid API response structure");
      }

      const services = data.data.services.map(
        (service: ServicePill, index: number) => ({
          ...service,
          activeService: index === 0, // Set first service as active by default
        })
      );

      setServicePills(services);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "An unknown error occurred";
      console.error("Error fetching service pills:", errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServicePills();
  }, [fetchServicePills]);

  return {
    servicePills,
    isLoading,
    activeIndex,
    navigationState,
    handleServiceClick,
    handleNextService,
    handlePreviousService,
    refetch: fetchServicePills,
  };
};
