import { createTheme } from '@mui/material/styles';
export const finalTheme = createTheme({
    components: {
        // MuiPopover: {
        //     variants: [
        //         {
        //             props: { variant: 'menu' },
        //             style: {
        //                 root: {
        //                     backgroundColor: 'black !important',
        //                     color: 'white'
        //                 }
        //             }
        //         }
        //     ]
        // },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: 'black',
                    color: 'white',
                    boxShadow: 'rgb(255 255 255 / 20%) 0px 0px 15px, rgb(255 255 255 / 15%) 0px 0px 3px 1px',
                    minWidth: '225px',
                    width: '225px',
                    left: '53px !important',
                    top: '0px !important',
                    padding: '0px'
                },

            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: '0px !important'
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    margin: '0px !important'
                }
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: 'rgba(91, 112, 131, 0.4) !important'
                }
            }
        }
    },
});