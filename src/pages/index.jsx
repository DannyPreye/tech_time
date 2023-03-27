import Head from 'next/head';
import Image from 'next/image';
import {
  PopularCourse,
  Support,
  Testimonials,
  ViewCourses,
  WhyUs
} from '../../Components';
import HomePage from '../../Components/Layout/HomePage';

export default function Home() {
  return (
    <>
      <HomePage>
        <Support />
        <ViewCourses />
        <WhyUs />
        <PopularCourse />
        <Testimonials />
      </HomePage>
    </>
  );
}
