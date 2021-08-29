import ActiveLink from "./func/ActiveLink";
import 'antd/dist/antd.css';
import { Menu, Dropdown } from 'antd';

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a rel="noopener noreferrer" href="/initial-letter-logo">
            Initial Letter Logo
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a rel="noopener noreferrer" href="/modern-minimalist-logo">
            Modern Minimalist Logo
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a rel="noopener noreferrer" href="/signature-logo">
            Signature Logo
        </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a rel="noopener noreferrer" href="/versatile-logo">
            Versatile Logo
        </a>
      </Menu.Item>
      <Menu.Item key="4">
        <a rel="noopener noreferrer" href="/vintage-logo">
            Vintage Logo
        </a>
      </Menu.Item>
    </Menu>
  );

const ServicesNav =()=>{
    return(
        <>
            <li>
                <Dropdown overlay={menu} placement="bottomLeft" arrow>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        Logo Design
                    </a>
                </Dropdown>
            </li>
            <li>
                <ActiveLink activeClassName="ServiceNavActive" href="/stationary">
                    <a>Stationary</a>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink activeClassName="ServiceNavActive" href="/web-design">
                    <a>Web Design</a>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink activeClassName="ServiceNavActive" href="/web-development">
                    <a>Web Development</a>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink activeClassName="ServiceNavActive" href="#">
                    <a>Packages Design</a>
                </ActiveLink>
            </li>
            <li>
                <ActiveLink activeClassName="ServiceNavActive" href="#">
                    <a>Digital Marketing</a>
                </ActiveLink>
            </li>
        </>
    )
}

export default ServicesNav;