export const tableActions = {
    "success": true,
    "data": {
        "fields": [
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
        ],
        "filterableColumns": [
            "feedback_time",
            "subject",
            "incident_count",
            "end_customer_name",
            "end_user_info",
            "custom_fields.Custom",
            "custom_fields.Priority",
            "custom_fields.Topic",
            "custom_fields.Type"
        ],
        "groupableColumns": [
            "feedback_status_name",
            "end_customer_name",
            "end_user_info",
            "custom_fields.Custom",
            "custom_fields.Priority",
            "custom_fields.Topic",
            "custom_fields.Type"
        ],
        "defaultColumns": [
            "feedback_id",
            "feedback_time",
            "subject",
            "incident_count",
            "feedback_status_name",
            "end_customer_name",
            "end_user_info"
        ],
        "customFields": [
            {
                "id": "bd99c5c6-c48b-4197-9704-19888f4c5276",
                "fieldName": "Custom",
                "fieldType": "Text",
                "formatType": "Plain Text",
                "fieldDescription": ""
            },
            {
                "id": "67a7121d-eb08-4046-82d5-d4f7117e415d",
                "fieldName": "Priority",
                "fieldType": "Text",
                "formatType": "Plain Text",
                "fieldDescription": ""
            },
            {
                "id": "3b36ad9b-4125-475a-bcef-81e413c88cf6",
                "fieldName": "Topic",
                "fieldType": "Text",
                "formatType": "Plain Text",
                "fieldDescription": ""
            },
            {
                "id": "78544e59-91e9-4176-8734-b33f7ee9b9f1",
                "fieldName": "Type",
                "fieldType": "Text",
                "formatType": "Plain Text",
                "fieldDescription": ""
            }
        ]
    }
}