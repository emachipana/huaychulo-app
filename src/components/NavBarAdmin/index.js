/** @jsxImportSource @emotion/react */
import { Container, CountNotifications, IconContainer, IconStyle, Notifications, NotiSection, NotiWrapper, Photo, ProfileContainer, ProfilePhoto, Text } from "./styles";
import { IoMail, IoNotifications } from "react-icons/io5";
import { useEffect, useState } from "react";
import { Toast, ToastBody, Tooltip } from "reactstrap";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import { get } from "../../services";

function NavBarAdmin() {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [notiOpen, setNotiOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetch(){
      const response = await get("orders");
      setOrders(response.filter(order => order.status === "pending"));
    }

    fetch();
  }, []);

  return (
    <>
      <Container>
        <IconContainer
          isOpen={notiOpen}
        >
          <IoNotifications
            onClick={() => setNotiOpen(!notiOpen)}
            css={IconStyle}
          />
          {
            !orders?.length <= 0
            ?
              <CountNotifications>
                { orders?.length }+
              </CountNotifications>
            :
              null
          }
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
              user.name.split(" ")[0] + " " + user.last_name.split(" ")[0]
            }
          </span>
          <ProfilePhoto
            src="https://cdn2.iconfinder.com/data/icons/user-23/512/User_Generic_1.png"
            alt="profile-photo"
          />
        </ProfileContainer>
      </Container>
      <Notifications
        isOpen={notiOpen}
      >
        {
          orders.map(order => (
            <Toast
              key={order.id}
              style={{cursor: "pointer", pointerEvents: "none"}}
            >
              <ToastBody>
                <NotiSection>
                  <Photo 
                    src={order.items[0].dish.image}
                  />
                  <NotiWrapper>
                    <Text>Nueva orden</Text>
                    <Text>Total: S/. {order.total}.00</Text>
                  </NotiWrapper>
                </NotiSection>
              </ToastBody>
            </Toast>
          ))
        }
      </Notifications>
    </>
  );
}

export default NavBarAdmin;
