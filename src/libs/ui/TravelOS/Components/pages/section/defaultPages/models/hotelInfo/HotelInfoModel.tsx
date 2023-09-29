import React, { useState, useEffect } from 'react';
import {
  Dialog,
  Box,
  Typography,
  IconButton,
  Divider,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  hotel,
} from '../../../../../../../../../../public/staticImage/defaultImage/Image';

interface HotelInfoProps {
  open: boolean;
  onClose: () => void;
}

const HotelInfoModel: React.FC<HotelInfoProps> = ({ open, onClose }) => {
  console.log(open, onClose);
  const amenities = [
    { icon: icon1, text: '100+ Duplex Suites' },
    { icon: icon2, text: '100+ Duplex Suites' },
    { icon: icon3, text: 'Best Rate Guarantee' },
    { icon: icon4, text: 'Multicusine Restaurants & bars' },
    { icon: icon5, text: 'Bureau Veritas Certified ' },
    { icon: icon6, text: 'Helicopter Access' },
    { icon: icon7, text: 'Airport Transfer ' },
    { icon: icon8, text: 'Beach Location' },
    { icon: icon9, text: 'Indoor & Outdoor Pools' },
  ];

  const chunkedAmenities = amenities.reduce((result, item, index) => {
    const chunkIndex = Math.floor(index / 3);

    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }

    result[chunkIndex].push(item);
    return result;
  }, [] as { icon: string; text: string }[][]);

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <Box
        sx={{
          bgcolor: 'white',
          borderRadius: '9px',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={1}
        >
          <Typography
            sx={{
              fontSize: '28px',
              flex: 1,
              textAlign: 'center',
              fontFamily: 'Averta PE',
              fontWeight: '300',
            }}
          >
            Atlantis, the Palm
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon fontSize="large" />
          </IconButton>
        </Box>

        <img
          src={hotel}
          alt="Hotel"
          style={{ width: '100%', maxHeight: '330px' }}
        />

        <Box px={3}>
          <Box pt={2}>
            <Typography
              paragraph
              fontSize={'14px'}
              fontFamily={'Averta PE'}
              lineHeight={'22.3px'}
            >
              Nestled between the calm turquoise waters of the Arabian Gulf and
              the majestic Dubai skyline, Atlantis, The Palm is the crown of the
              world-famous Palm Island in Dubai. Whether you’re staying in our
              world-renowned resort, dining in one of our award-winning
              celebrity chef restaurants, or feeling the rush at Aquaventure
              Waterpark, experience a world away from your everyday at Atlantis,
              The Palm.
            </Typography>
            <Divider
              sx={{ bgcolor: 'primary.main', border: '1px solid #0057B7' }}
            />
          </Box>
          <Box>
            <Grid p={2} container spacing={4}>
              {chunkedAmenities.map((chunk, index) => (
                <Grid p={0} item container xs={4} key={index}>
                  {chunk.map((amenity, amenityIndex) => (
                    <Grid p={0} item xs={12} key={amenityIndex}>
                      <Box display="flex" alignItems="center">
                        <img
                          src={amenity.icon}
                          alt="Icon"
                          width="17.07px"
                          height="16px"
                        />
                        <Typography
                          p={0.5}
                          sx={{
                            lineHeight: '14.83px',
                            fontSize: '12px',
                            fontWeight: '300',
                            fontFamily: 'Averta PE',
                            marginTop: '8px',
                          }}
                        >
                          {amenity.text}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};

export default HotelInfoModel;
