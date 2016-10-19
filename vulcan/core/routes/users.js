{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "users",
    "type": "object",
    "properties": {
        "data": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number"
                    },
                    "name": {
                        "type": "string"
                    },
                    "username": {
                        "type": "string"
                    },
                    "email": {
                        "type": "string"
                    },
                    "address": {
                        "type": "object",
                        "properties": {
                            "street": {
                                "type": "string"
                            },
                            "suite": {
                                "type": "string"
                            },
                            "city": {
                                "type": "string"
                            },
                            "zipcode": {
                                "type": "string"
                            },
                            "geo": {
                                "type": "object",
                                "properties": {
                                    "lat": {
                                        "type": "string"
                                    },
                                    "lng": {
                                        "type": "string"
                                    }
                                }
                            }
                        }
                    },
                    "phone": {
                        "type": "string"
                    },
                    "website": {
                        "type": "string"
                    },
                    "company": {
                        "type": "object",
                        "properties": {
                            "name": {
                                "type": "string"
                            },
                            "catchPhrase": {
                                "type": "string"
                            },
                            "bs": {
                                "type": "string"
                            }
                        }
                    }
                },
                "required": [
                    "id",
                    "name",
                    "username",
                    "email",
                    "address",
                    "phone",
                    "website",
                    "company"
                ]
            }
        },
        "status": {
            "type": "number"
        },
        "statusText": {
            "type": "string"
        },
        "headers": {
            "type": "object",
            "properties": {
                "date": {
                    "type": "string"
                },
                "content-type": {
                    "type": "string"
                },
                "transfer-encoding": {
                    "type": "string"
                },
                "connection": {
                    "type": "string"
                },
                "set-cookie": {
                    "type": "array",
                    "items": {
                        "type": "string"
                    }
                },
                "x-powered-by": {
                    "type": "string"
                },
                "vary": {
                    "type": "string"
                },
                "access-control-allow-credentials": {
                    "type": "string"
                },
                "cache-control": {
                    "type": "string"
                },
                "pragma": {
                    "type": "string"
                },
                "expires": {
                    "type": "string"
                },
                "x-content-type-options": {
                    "type": "string"
                },
                "etag": {
                    "type": "string"
                },
                "via": {
                    "type": "string"
                },
                "cf-cache-status": {
                    "type": "string"
                },
                "server": {
                    "type": "string"
                },
                "cf-ray": {
                    "type": "string"
                }
            }
        },
        "config": {
            "type": "object",
            "properties": {
                "transformRequest": {
                    "type": "object",
                    "properties": {
                        "0": {
                            "type": "string"
                        }
                    }
                },
                "transformResponse": {
                    "type": "object",
                    "properties": {
                        "0": {
                            "type": "string"
                        }
                    }
                },
                "headers": {
                    "type": "object",
                    "properties": {
                        "Accept": {
                            "type": "string"
                        },
                        "User-Agent": {
                            "type": "string"
                        }
                    }
                },
                "timeout": {
                    "type": "number"
                },
                "xsrfCookieName": {
                    "type": "string"
                },
                "xsrfHeaderName": {
                    "type": "string"
                },
                "method": {
                    "type": "string"
                },
                "url": {
                    "type": "string"
                },
                "withCredentials": {
                    "type": "null"
                },
                "data": {
                    "type": "null"
                }
            }
        }
    }
}