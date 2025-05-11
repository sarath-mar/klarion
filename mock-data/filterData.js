export const applyNumberFilter = (data, filter) => {
    if (filter.scope === "between") {
        data = data.filter(
            (item) =>
                item[filter.key] >= Number(filter.scopeFrom) &&
                item[filter.key] <= Number(filter.scopeTo)
        );
    } else if (filter.scope === "equalTo") {
        data = data.filter(
            (item) => item[filter.key] === Number(filter.scopeValue)
        );
    } else if (filter.scope === "lessThan") {
        data = data.filter((item) => item[filter.key] < Number(filter.scopeValue));
    } else if (filter.scope === "greaterThan") {
        data = data.filter((item) => item[filter.key] > Number(filter.scopeValue));
    }
    return data;
};
export const applyStringFilter = (data, filter) => {
    if (filter.scope === "contains") {
        data = data.filter((item) =>
            item[filter.key]?.toLowerCase().includes(filter.scopeValue.toLowerCase())
        );
    } else if (filter.scope === "beginsWith") {
        data = data.filter((item) =>
            item[filter.key]
                ?.toLowerCase()
                .startsWith(filter.scopeValue.toLowerCase())
        );
    } else if (filter.scope === "endsWith") {
        data = data.filter((item) =>
            item[filter.key]?.toLowerCase().endsWith(filter.scopeValue.toLowerCase())
        );
    } else if (filter.scope === "equalTo") {
        data = data.filter(
            (item) =>
                item[filter.key]?.toLowerCase() === filter.scopeValue.toLowerCase()
        );
    }
    return data;
};
export const getDateRange = (key) => {
    const today = new Date();
    const startOfDay = new Date(today.setHours(0, 0, 0, 0));
    const endOfDay = new Date(today.setHours(23, 59, 59, 999));

    switch (key) {
        case "today":
            return [startOfDay, endOfDay];
        case "yesterday":
            const yesterday = new Date(today.setDate(today.getDate() - 1));
            return [
                new Date(yesterday.setHours(0, 0, 0, 0)),
                new Date(yesterday.setHours(23, 59, 59, 999)),
            ];
        case "thisWeek":
            const startOfWeek = new Date(
                today.setDate(today.getDate() - today.getDay())
            );
            return [new Date(startOfWeek.setHours(0, 0, 0, 0)), endOfDay];
        case "thisMonth":
            const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
            return [startOfMonth, endOfDay];
        case "thisQuarter":
            const quarterStartMonth = Math.floor(today.getMonth() / 3) * 3;
            const startOfQuarter = new Date(
                today.getFullYear(),
                quarterStartMonth,
                1
            );
            return [startOfQuarter, endOfDay];
        case "thisYear":
            const startOfYear = new Date(today.getFullYear(), 0, 1);
            return [startOfYear, endOfDay];
        case "last7Days":
            const last7Days = new Date(today.setDate(today.getDate() - 7));
            return [new Date(last7Days.setHours(0, 0, 0, 0)), endOfDay];
        case "last30Days":
            const last30Days = new Date(today.setDate(today.getDate() - 30));
            return [new Date(last30Days.setHours(0, 0, 0, 0)), endOfDay];
        case "last90Days":
            const last90Days = new Date(today.setDate(today.getDate() - 90));
            return [new Date(last90Days.setHours(0, 0, 0, 0)), endOfDay];
        case "last365Days":
            const last365Days = new Date(today.setDate(today.getDate() - 365));
            return [new Date(last365Days.setHours(0, 0, 0, 0)), endOfDay];
        default:
            return null;
    }
};
export const applyDateFilter = (data, filter) => {
    const parseDate = (date) => new Date(date).getTime();

    if (filter.scopeValue && typeof filter.scopeValue === "string") {
        const range = getDateRange(filter.scopeValue);
        if (range) {
            data = data.filter((item) => {
                const itemDate = parseDate(item[filter.key]);
                return itemDate >= range[0].getTime() && itemDate <= range[1].getTime();
            });
        }
    }
    if (filter.scope === "within") {
        data = data.filter((item) => {
            const itemDate = parseDate(item[filter.key]);
            const rangeStart = parseDate(filter.scopeValue[0]);
            const rangeEnd = parseDate(filter.scopeValue[1]);
            return itemDate >= rangeStart && itemDate <= rangeEnd;
        });
    } else if (filter.scope === "notWithin") {
        data = data.filter((item) => {
            const itemDate = parseDate(item[filter.key]);
            const rangeStart = parseDate(filter.scopeValue[0]);
            const rangeEnd = parseDate(filter.scopeValue[1]);
            return itemDate < rangeStart || itemDate > rangeEnd;
        });
    } else if (filter.scope === "customRange") {
        data = data.filter((item) => {
            const itemDate = parseDate(item[filter.key]);
            const rangeStart = parseDate(filter.scopeFrom);
            const rangeEnd = parseDate(filter.scopeTo);
            return itemDate >= rangeStart && itemDate <= rangeEnd;
        });
    }

    return data;
};