import React, { useState } from 'react';
import Box from '@mui/material/Box';
// import backgroundImageUrl from '../../assets/bg.png';
import { Typography, Accordion, AccordionSummary, Grid, IconButton } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const Faq = () => {
    const containerStyle = {
        backgroundImage: `url(https://images.pexels.com/photos/12565208/pexels-photo-12565208.jpeg?auto=compress&cs=tinysrgb&w=800)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        overflow:'scroll',  
    };

    const [expanded, setExpanded] = useState(null); // State to manage expanded accordion

    const handleAccordionChange = (index: any) => (event: any, isExpanded: any) => {
        setExpanded(isExpanded ? index : null);
    };

    const faqData = [
        {
            question: 'Atlantis Business Connect(ABC) definitions',
            answer: `Home:
            The home page displays the search parameters in ABC.
            The search parameters are 
            Destination, Stay Dates and
            Guest and rooms
            Dashboard:
            The Quotation page display the rooms currently in your
            cart. If the cart is empty, The 
            system will indicate so.
            Notification:
            The notification display the operational and business alert
            for the logged in user.
            Logout:
            You can logout of ABC using the "logout" option
            which is displayed when you click 
            the logged in user's name.`,
        },
        {
            question: 'Is there parking available at the hotel?',
            answer: 'Yes, we offer complimentary parking for our guests.',
        },
        {
            question: 'Are pets allowed at the hotel?',
            answer: 'Yes, we are a pet-friendly hotel. There may be additional charges for bringing pets.',
        },
        {
            question: 'Is there a restaurant on-site?',
            answer: 'Yes, we have an on-site restaurant that serves a variety of delicious dishes.',
        },
        {
            question: 'Do you have a fitness center or gym?',
            answer: 'Yes, we have a well-equipped fitness center available for our guests.',
        },
        {
            question: 'Is the hotel accessible for people with disabilities?',
            answer: 'Yes, our hotel is wheelchair accessible, and we have facilities for people with disabilities.',
        },
        {
            question: 'Is room service available 24/7?',
            answer: 'Yes, we offer 24-hour room service for our guests.',
        },
        {
            question: 'Do you provide airport shuttle service?',
            answer: 'Yes, we provide airport shuttle services for our guests. Please contact us for more details.',
        },
    ];

    return (
        <Box sx={containerStyle} >
            <Box p={5} px={10}>
                <Typography variant='subtitle2' sx={{ fontFamily: 'Averta PE', textAlign: 'left' }}>
                    ATLANTIS BUSINESS CONNECT
                </Typography>
                <Typography variant='h1' sx={{ fontFamily: 'TFArrow', marginBottom: '16px', textAlign: 'left', fontSize: '44.69px' }}>
                    FAQs
                </Typography>
            </Box>
            <Box >
                <Box px={5}>
                    {faqData.map((faq, index) => (
                        <Accordion
                            key={index}
                            expanded={expanded === index}
                            onChange={handleAccordionChange(index)}
                            sx={{ marginBottom: 2 }}
                        >
                            <AccordionSummary
                                aria-controls={`faq-content-${index}`}
                                id={`faq-header-${index}`}

                            >
                                <Box px={2}>{
                                    expanded === index ? (
                                        <RemoveCircleOutlineIcon fontSize='large' sx={{ color: 'primary.main' }} />
                                    ) : (
                                        <AddCircleOutlineIcon fontSize='large' sx={{ color: 'primary.main' }} />
                                    )
                                }
                                </Box> <Typography px={2} sx={{ fontFamily: 'Inter' }} variant="h6">{faq.question}</Typography>
                            </AccordionSummary>
                            <Box p={2}>
                                <Typography>{faq.answer}</Typography>
                            </Box>
                        </Accordion>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Faq;
