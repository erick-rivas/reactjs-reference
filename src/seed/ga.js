/*
__Seed builder__
  (Read_only) Builder helper
*/

import React, { useEffect } from 'react';
import { GA_KEY } from 'settings';
import ReactGA from 'react-ga4';

/**
 * 
 * Initialize Google Analytics 4 connection
 * @returns nothing
 * @example
 * initGA();
 */
const initGA = (options = {}) => { 
  ReactGA.initialize([{ 
    trackingId: GA_KEY,
    gaOptions: {
      ...getDefaultOptions(),
      ...options
    }
  }]);
  ReactGA.set({ ...getDefaultOptions() });
};

/**
 * 
 * Track url changes
 * @returns nothing
 * @example
 * usePageTracking();
 */
const usePageTracking = () => {
  let pathname = window.location.pathname
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: pathname });
  }, [pathname]);
};

/**
 * 
 * Return a hook to track events
 * @param {String} category
 * @param {String} action
 * @param {String} label
 * @param {Object} extra options (ex. value, nonInteraction)
 * @returns Google Analytics 4 Event hook
 * @example
 * const callGAEvent = useEventGA("category");
 * callGAEvent("action", "label");
 */
const useEventGA = (category) => {
  const eventTracker = (action, label, options = {}) => {
    ReactGA.event({category, action, label , ...options});
  };
  return eventTracker;
};

/**
 * 
 * Return a hook to track page loading time
 * @param {String} category
 * @param {String} action
 * @param {String} label
 * @returns Google Analytics 4 Timing hook
 * @example
 * const callGATiming = useEventGA("category");
 * callGATiming("action", "label");
 */
const useTimingGA = (category) => {
  const timingTracker = (variable, value) => {
    ReactGA.timing({category, variable, value});
  };
  return timingTracker;
};

const getDefaultOptions = () => {
	return {
		userId: sessionStorage.getItem("id")
	}
};

export { initGA, useEventGA, usePageTracking, useTimingGA };