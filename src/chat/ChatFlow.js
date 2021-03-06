export const flow = {
    1 : {
        question : "Welcome to our company! How can we help you?",
        options : {
            0 : {
                val : "Market my real estate",
                next: "2"
            },
            1 : {
                val : "Buy or rent property",
                next: "3"
            },
            2 : {
                val : "Join Our organization",
                next: "8"
            },
            3 : {
                val : "Others",
                next: "7"
            }
        }
    },
    2 : {
        question : "How would you like to market the property?",
        options : {
            0 : {
                val : "Second hand housing",
                next: "5"
            },
            1 : {
                val : "Development",
                next: "5"
            },
            2 : {
                val : "Tertiary real estate asset",
                next: "5"
            }
        }
    },
    3 : {
        question : "Would you like to Sell or Rent out?",
        options : {
            0 : {
                val : "Sell",
                next: "4"
            },
            1 : {
                val : "Rent out",
                next: "4"
            }
        }
    },
    4 : {
        question : "What is the address of your property",
        options : {
            0 : {
                val : "Barcelona",
                next: "8"
            },
            1 : {
                val : "Hamburg",
                next: "8"
            }
        }
    },
    5 : {
        question : "How old is you property?",
        options : {
            0 : {
                val : "10 years",
                next: "8"
            },
            1 : {
                val : "15 years",
                next: "8"
            }
        }
    },
    6 : {
        question : "Please Confirm the processing of your data",
        options : {
            0 : {
                val : "Yes I confirm",
                next: "7"
            }
        }
    },
    7 : {
        question : "Last Question",
        options : {
            0 : {
                val : "Send Request now",
                next: ""
            },
            1 : {
                val : "Close now",
                next: ""
            }
        }
    },
    8 : {
        question : "What is your name?",
        type : "Name",
        next: "9"
    },
    9 : {
        question : "What is your e-mail address?",
        type : "Email",
        next: "6"
    }
  }
