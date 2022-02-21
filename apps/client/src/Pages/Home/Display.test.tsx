import render from "Utils/render";
// import { BrowserRouter } from "react-router-dom";

import HomePageDisplay from "./Display";
import { HomepageBannerInfo } from "Api/HomepageBannerInfo";
import { HomePartners } from "Api/HomePartners";
import { Homepage } from "Api/Homepage";
// import { CoursePresentation } from "Api/CoursePresentation";

const mockedData: HomepageBannerInfo = {
  title: "LABFAZ",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at.",
  image: {
    url:
      "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
    alternativeText: "Homepage Banner Image",
    caption: "string",
    width: 20,
    height: 20,
    ext: "jpeg",
  },
};

const mockedTitle: string = "Exemplo";
const mockedSubtitle: string = "Exemplo";
const mockedVideo: string = "https://www.youtube.com/watch?v=UrUJyKsLQeU";
const mockedPartners: HomePartners[] = [
  {
    name: "Partner1",
    logo: [
      {
        url:
          "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Logo_Sample_8f2bd43037.png",
      },
    ],
  },
  {
    name: "Partner2",
    logo: [
      {
        url:
          "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Logo_Sample_8f2bd43037.png",
      },
    ],
  },
];

const mockedCoursesTexts: Homepage = {
  course_presentation_title: "Lorem Ipsum",
  course_presentation_first_text:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
  course_presentation_second_text:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.",
};

// const mockedCoursesData: CoursePresentation[] = [
//   {
//     title: "IX Workshop de Iluminacao",
//     subtitle: "iluminação",
//     description:
//       "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
//     finish_date: "2020-08-05",
//     banner_image: {
//       url:
//         "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
//       alternativeText: "imagem aleatória",
//       caption: "",
//       width: 0,
//       height: 0,
//       ext: "jpeg",
//     },
//     finished: true,
//   },
// ];

describe("Home Page", () => {
  it("renders without exploding", () => {
    expect(() =>
      render(
        <HomePageDisplay
          data={mockedData}
          title={mockedTitle}
          subtitle={mockedSubtitle}
          video={mockedVideo}
          partners={mockedPartners}
          coursesText={mockedCoursesTexts}
          // coursesData={mockedCoursesData}
        />
      )
    ).not.toThrow();
  });

  it("displays the data message", () => {
    const { getAllByRole } = render(
      <HomePageDisplay
        data={mockedData}
        title={mockedTitle}
        subtitle={mockedSubtitle}
        video={mockedVideo}
        partners={mockedPartners}
        coursesText={mockedCoursesTexts}
        // coursesData={mockedCoursesData}
      />
    );

    // expect retrieved data to be displayed
    expect(getAllByRole("heading", { level: 1 })[0]).toHaveTextContent(
      "LABFAZ"
    );
    expect(getAllByRole("heading", { level: 2 })[0]).toHaveTextContent(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at."
    );
  });
});
