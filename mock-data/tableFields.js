export const tableFields =  [
            {
                "key": "feedback_id",
                "displayName": "Feedback ID",
                "type": "number",
                "sortable": true,
                "filterable": false,
                "groupable": false,
                "visible": true,
                "required": true
            },
            {
                "key": "feedback_time",
                "displayName": "Feedback Date",
                "type": "date",
                "sortable": true,
                "filterable": true,
                "groupable": false,
                "visible": true
            },
            {
                "key": "subject",
                "displayName": "Subject",
                "type": "string",
                "sortable": true,
                "filterable": true,
                "groupable": false,
                "visible": true
            },
            {
                "key": "incident_count",
                "displayName": "Incidents Found #",
                "type": "number",
                "sortable": true,
                "filterable": true,
                "groupable": false,
                "visible": true
            },
            {
                "key": "feedback_status_name",
                "displayName": "Processing Status",
                "type": "string",
                "sortable": true,
                "filterable": false,
                "groupable": true,
                "visible": true
            },
            {
                "key": "end_customer_name",
                "displayName": "Customer",
                "type": "string",
                "sortable": true,
                "filterable": true,
                "groupable": true,
                "visible": true
            },
            {
                "key": "end_user_info",
                "displayName": "User Name & Email",
                "type": "string",
                "sortable": true,
                "filterable": true,
                "groupable": true,
                "visible": true
            },
            {
                "key": "custom_fields.Custom",
                "displayName": "Custom",
                "type": "string",
                "sortable": false,
                "filterable": true,
                "groupable": true,
                "visible": false,
                "isCustomField": true
            },
            {
                "key": "custom_fields.Priority",
                "displayName": "Priority",
                "type": "string",
                "sortable": false,
                "filterable": true,
                "groupable": true,
                "visible": false,
                "isCustomField": true
            },
            {
                "key": "custom_fields.Topic",
                "displayName": "Topic",
                "type": "string",
                "sortable": false,
                "filterable": true,
                "groupable": true,
                "visible": false,
                "isCustomField": true
            },
            {
                "key": "custom_fields.Type",
                "displayName": "Type",
                "type": "string",
                "sortable": false,
                "filterable": true,
                "groupable": true,
                "visible": false,
                "isCustomField": true
            }
        ]