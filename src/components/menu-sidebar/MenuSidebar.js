/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";
import { Button, Divider, Modal, Avatar } from "@mui/material";
import common from "../../common.module.css";
import {
  Logo,
  Home,
  Explore,
  Notifications,
  Messages,
  Bookmarks,
  Lists,
  Profile,
  More,
  Topics,
  Moments,
  NewsLetters,
  Professionals,
  Ads,
  Analytics,
  Settings,
  Help,
  Display,
  Shortcuts,
  Close,
  Globe,
  Tweet_Emoji,
  Tweet_Image,
  Tweet_Schedule,
  Tweet_Poll,
  Tweet_Location,
  Tweet_Gif
} from "../../icons";
import { Link } from "react-router-dom";
import styles from "./menusidebar.module.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const routes = [
  "home",
  "explore",
  "notifications",
  "messages",
  "bookmarks",
  "lists",
  "profile",
];
const svg_switch = (route) => {
  switch (route) {
    case "home":
      return <Home width="26.25px" height="26.25px" />;
    case "explore":
      return <Explore width="26.25px" height="26.25px" />;
    case "notifications":
      return <Notifications width="26.25px" height="26.25px" />;
    case "messages":
      return <Messages width="26.25px" height="26.25px" />;
    case "bookmarks":
      return <Bookmarks width="26.25px" height="26.25px" />;
    case "lists":
      return <Lists width="26.25px" height="26.25px" />;
    case "profile":
      return <Profile width="26.25px" height="26.25px" />;
    default:
      break;
  }
};
const MenuSidebar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [ModalOpen, setOpen] = React.useState(false);
  const ModalHandleOpen = () => setOpen(true);
  const ModalHandleClose = () => setOpen(false);

  // const [ReplyanchorEl, setReplyAnchorEl] = useState(null);
  // const Replyopen = Boolean(ReplyanchorEl);
  // const ReplyhandleClick = (event) => {
  //   console.log(event);
  //   setReplyAnchorEl(event.currentTarget);
  // };
  // const ReplyhandleClose = () => {
  //   setReplyAnchorEl(null);
  // };

  return (
    <>
      <div className={styles.sidebar_container}>
        <div>
          <Button
            component={Link}
            to="/gg"
            className={common.logo_hover}
            sx={{ padding: "0px" }}
          >
            <Logo width="50px" height="30px" />
          </Button>
          <div className={styles.nav_container}>
            {routes.map((route) => {
              return (
                <Button className={styles.sidebar_nav_item} key={route}>
                  {svg_switch(route)}
                  <span className={styles.sidebar_nav_text}>{route}</span>
                </Button>
              );
            })}
            <Button className={styles.sidebar_nav_item} onClick={handleClick}>
              <More width="26.25px" height="26.25px" />
              <span className={styles.sidebar_nav_text}>More</span>
            </Button>
            <Menu
              className={styles.sidebar_popover}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <MenuItem className={styles.pop_menu_text} onClick={handleClose}>
                <Topics width="18.75px" height="18.75px" />
                <span>Topics</span>
              </MenuItem>
              <MenuItem className={styles.pop_menu_text} onClick={handleClose}>
                <Moments width="18.75px" height="18.75px" />
                <span>Moments</span>
              </MenuItem>
              <MenuItem className={styles.pop_menu_text} onClick={handleClose}>
                <NewsLetters width="18.75px" height="18.75px" />
                <span>Newsletters</span>
              </MenuItem>
              <MenuItem className={styles.pop_menu_text} onClick={handleClose}>
                <Professionals width="18.75px" height="18.75px" />
                <span>Twitter for Professionals</span>
              </MenuItem>
              <MenuItem className={styles.pop_menu_text} onClick={handleClose}>
                <Ads width="18.75px" height="18.75px" />
                <span>Twitter Ads</span>
              </MenuItem>
              <MenuItem className={styles.pop_menu_text} onClick={handleClose}>
                <Analytics width="18.75px" height="18.75px" />
                <span>Analytics</span>
              </MenuItem>
              <Divider />
              <MenuItem className={styles.pop_menu_text} onClick={handleClose}>
                <Settings width="18.75px" height="18.75px" />
                <span>Settings and Privacy</span>
              </MenuItem>
              <MenuItem className={styles.pop_menu_text} onClick={handleClose}>
                <Help width="18.75px" height="18.75px" />
                <span>Help Center</span>
              </MenuItem>
              <MenuItem className={styles.pop_menu_text} onClick={handleClose}>
                <Display width="18.75px" height="18.75px" />
                <span>Display</span>
              </MenuItem>
              <MenuItem className={styles.pop_menu_text} onClick={handleClose}>
                <Shortcuts width="18.75px" height="18.75px" />
                <span>Keyboard Shortcuts</span>
              </MenuItem>
            </Menu>
          </div>
          <Button className={common.tweet_btn} onClick={ModalHandleOpen}>
            Tweet
          </Button>
          <Modal open={ModalOpen} onClose={ModalHandleClose}>
            <div className={styles.tweet_popup_container}>
              <div className={styles.tweet_popup_top}>
                <div className={styles.tweet_popup_close_btn} onClick={ModalHandleClose}>
                  <Close width='20px' height='20px' />
                </div>
              </div>
              <div className={styles.tweet_popup_form}>
                <div className={styles.tweet_popup_input}>
                  <div className={styles.tweet_popup_avatar}>
                    <Avatar
                      alt="Remy Sharp"
                      sx={{ width: 36, height: 36, }}>N</Avatar>
                  </div>
                  <div>
                    <textarea className={styles.tweet_input} placeholder="What's happening?"></textarea>
                    <div className={styles.tweet_popup_reply_settings}>
                      <Globe width="16px" height="16px" />
                      <span>Everyone can reply</span>
                    </div>
                    <Divider />
                    <div className={styles.tweet_options_container}>
                      <div className={styles.tweet_options}>
                        <Tweet_Image width="20px" height="20px" margin="0px 7px" />
                        <Tweet_Gif width="20px" height="20px" margin="0px 7px" />
                        <Tweet_Poll width="20px" height="20px" margin="0px 7px" />
                        <Tweet_Emoji width="20px" height="20px" margin="0px 7px" />
                        <Tweet_Schedule width="20px" height="20px" margin="0px 7px" />
                        <Tweet_Location width="20px" height="20px" margin="0px 7px" />
                      </div>
                      <div>
                        <Button className={common.tweet_btn_modal} onClick={ModalHandleOpen}>
                          Tweet
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Modal>
        </div>
        <div className={styles.sidebar_profile_container}>
          <div className={styles.sidebar_profile_avatar}>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 36, height: 36, }}>N</Avatar>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSidebar;
