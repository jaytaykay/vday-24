export function isMobile(setIsMobileDevice) {
  const deviceIsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  console.log("isMobile() called, returning: " + deviceIsMobile + "");
  setIsMobileDevice(deviceIsMobile);
}
  
