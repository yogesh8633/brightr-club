import { Menu, Dropdown, Avatar, Input } from "antd";
import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/">Profile</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="/">Settings</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">Logout</Menu.Item>
  </Menu>
);

const Navbar = () => {
  return (
    <nav className="navbar bg-white px-4 lg:px-20 py-4 w-full flex flex-col lg:flex-row lg:justify-between items-center gap-4">
      <div className="w-full lg:w-1/2 flex justify-between items-center">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="BrightR.Club" className="img-fluid w-full" />
          </a>
        </div>
        <div className="search-bar flex-1 mx-4 lg:mx-12">
          <Input
            placeholder="Search by author, title, age, genre..."
            size="large"
            className="border-0 w-1/2 md:w-full bg-gray-100"
            prefix={<SearchOutlined className="text-gray-500" />}
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-between lg:justify-end items-center gap-4 lg:gap-8">
        <div className="nav-links flex items-center text-sm gap-4 lg:gap-8">
          <a href="/" className="text-black">
            Home
          </a>
          <a href="/library" className="text-blue-600">
            Browse Library
          </a>
          <a href="/blog" className="text-black">
            Blog
          </a>
          <a href="/my-books" className="text-black border-l-2 border-gray-200 ps-5 ">
            My Books
          </a>
        </div>
        <div className="flex items-center text-sm gap-4">
        <Dropdown overlay={menu} trigger={["click"]}>
            <div className="delivery-info text-black flex items-center text-[0.7rem] mb-4">
              <div className="flex flex-col">
                <span className="text-end">Next Delivery</span>
                <span className="font-semibold text-sm">Mon, 15 Jan</span>
              </div>
              <CaretDownOutlined className="ml-1" />
            </div>
          </Dropdown>
          <Avatar src={profile} size="large" className="ml-4 lg:ml-8" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
