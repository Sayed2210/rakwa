export const  extractAndAddHours = (timestamp: string, hoursToAdd: number= 2): string => {
    const date = new Date(timestamp);

    // Add the specified hours
    date.setUTCHours(date.getUTCHours() + hoursToAdd);

    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
};