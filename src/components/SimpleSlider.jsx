import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
  };
  return (
    <div className="mt-5">
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 pl-5">
          <div className="flex flex-col">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritati
            </div>
            <button
              type="button"
              class="mt-4 text-white-900 bg-white border border-gray-300 focus:outline-none hover:bg-pink-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Detail
            </button>
          </div>
          <img
            className="image-test"
            src="https://static.nike.com/a/images/t_default/30a3295f-e946-46bf-8990-155baf4ffaae/air-force-1-le-gen%C3%A7-ayakkab%C4%B1s%C4%B1-Zt6d8Z.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 pl-5">
          <div className="flex flex-col">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritati
            </div>
            <button
              type="button"
              class="mt-4 text-white-900 bg-white border border-gray-300 focus:outline-none hover:bg-pink-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
            >
              Detail
            </button>
          </div>

          <img
            className="image-test"
            src="https://static.nike.com/a/images/t_default/0f7e4d70-f637-47f8-96e7-10b5e64b01f7/air-force-1-le-gen%C3%A7-ayakkab%C4%B1s%C4%B1-Zt6d8Z.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};
export default SimpleSlider;
