/** @jsxImportSource @emotion/react */
import { Container, CountNotifications, IconContainer, IconStyle, Notifications, ProfileContainer, ProfilePhoto } from "./styles";
import { IoMail, IoNotifications } from "react-icons/io5";
import { useState } from "react";
import { Tooltip } from "reactstrap";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";

function NavBarAdmin({ orders }) {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [notiOpen, setNotiOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      <IconContainer
        isOpen={notiOpen}
      >
        <IoNotifications
          onClick={() => setNotiOpen(!notiOpen)}
          css={IconStyle}
        />
        {
          !orders.length <= 0
          ?
            <CountNotifications>
              { orders.length }+
            </CountNotifications>
          :
            null
        }
        <Notifications
          isOpen={notiOpen}
        >

        </Notifications>
      </IconContainer>
      <IconContainer
        id="message"
      >
        <IoMail
          css={IconStyle}
        />
      </IconContainer>
      <Tooltip
        isOpen={tooltipOpen}
        target="message"
        toggle={() => setTooltipOpen(!tooltipOpen)}
      >
        en desarrollo...
      </Tooltip>
      <hr 
        style={{
          transform: "rotate(90deg)",
          width: "35px"
        }}
      />
      <ProfileContainer
        onClick={() => navigate("/perfil")}
      >
        <span
          style={{fontWeight: 600}}
        >
          {
            user.document_type === "ruc"
            ?
            `${user.name}`
            :
            `${user.name.split(" ")[0]} ${user.last_name.split(" ")}`
          }
        </span>
        <ProfilePhoto
          src="https://cdn2.iconfinder.com/data/icons/user-23/512/User_Generic_1.png"
          alt="profile-photo"
        />
      </ProfileContainer>
    </Container>
  );
}

export default NavBarAdmin;
