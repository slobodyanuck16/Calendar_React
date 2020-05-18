       
        // const dayEvents = [
        //     { time: "00:00" },
        //     { time: "01:00" },
        //     { time: "02:00" },
        //     { time: "03:00" },
        //     { time: "04:00" },
        //     { time: "05:00" },
        //     { time: "06:00" },
        //     { time: "07:00" },
        //     { time: "08:00" },
        //     { time: "09:00" },
        //     { time: "10:00" },
        //     { time: "11:00" },
        //     { time: "12:00" },
        //     { time: "13:00" },
        //     { time: "14:00" },
        //     { time: "15:00" },
        //     { time: "16:00" },
        //     { time: "17:00" },
        // ]
        // let i = 0;

        // const result = this.props.events.filter(
        //     (day) => day.startTime === dayEvents[i++].time
        // );

        // const events = [
        //     {events: result[0]},
        //     {events: result[1]},
        //     {events: result[2]},
        // ]

        // console.log(dayEvents);
        // // console.log(events);

        // for (let i = 0; i < dayEvents.length; i++) {
        //     Object.assign(dayEvents[i], events[i])
        // }

        // getHours = (event, dayDate) => {
    //     const formatDate = moment(dayDate).format("YYYY-MM-DD");
    //     const filterEvents = event.filter(
    //         (eventObj) => eventObj.date === formatDate
    //     );

    //     let day = [
    //         {
    //             hour: "00:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "00"
    //             ),
    //         },
    //         {
    //             hour: "01:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "01"
    //             ),
    //         },
    //         {
    //             hour: "02:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "02"
    //             ),
    //         },
    //         {
    //             hour: "03:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "03"
    //             ),
    //         },
    //         {
    //             hour: "04:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "04"
    //             ),
    //         },
    //         {
    //             hour: "05:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "05"
    //             ),
    //         },
    //         {
    //             hour: "06:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "06"
    //             ),
    //         },
    //         {
    //             hour: "07:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "07"
    //             ),
    //         },
    //         {
    //             hour: "08:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "08"
    //             ),
    //         },
    //         {
    //             hour: "09:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "09"
    //             ),
    //         },
    //         {
    //             hour: "10:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "10"
    //             ),
    //         },
    //         {
    //             hour: "11:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "11"
    //             ),
    //         },
    //         {
    //             hour: "12:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "12"
    //             ),
    //         },
    //         {
    //             hour: "13:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "13"
    //             ),
    //         },
    //         {
    //             hour: "14:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "14"
    //             ),
    //         },
    //         {
    //             hour: "15:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "15"
    //             ),
    //         },
    //         {
    //             hour: "16:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "16"
    //             ),
    //         },
    //         {
    //             hour: "17:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "17"
    //             ),
    //         },
    //         {
    //             hour: "18:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "18"
    //             ),
    //         },
    //         {
    //             hour: "19:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "19"
    //             ),
    //         },
    //         {
    //             hour: "20:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "20"
    //             ),
    //         },
    //         {
    //             hour: "21:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "21"
    //             ),
    //         },
    //         {
    //             hour: "22:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "22"
    //             ),
    //         },
    //         {
    //             hour: "23:00",
    //             event: filterEvents.filter(
    //                 (eventObj) => eventObj.startTime.substr(0, 2) === "23"
    //             ),
    //         },
    //     ];

    //     return day;
    // };