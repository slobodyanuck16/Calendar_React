const baseUrl = "https://5e97f8bc77f5430016339cb5.mockapi.io/api/v1/events";

export const createEvent = (eventData) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(eventData),
    }).then((response) => {
        if (!response.ok) throw new Error("Failed to create event");
    });
};

export const fetchEventsList = () => {
    return fetch(baseUrl).then((response) => {
        if (response.ok) return response.json();
    });
};

// export const updateEvent = (taskId, taskData) => {
//     return fetch(`${baseUrl}/${taskId}`, {
//         method: "PUT",
//         header: {
//             "Content-Type": "application/json;charset=utf-8",
//         },
//         body: JSON.stringify(taskData),
//     }).then((response) => {
//         if (!response.ok) throw new Error("Failed to update event");
//     });
// };

export const deleteEvent = (eventId) => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: "DELETE",
    }).then((response) => {
        if (!response.ok) throw new Error("Failed to delete event");
    });
};