import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { ContentsWrapper, MiddleFadeBar, ToTop } from './Home.styled';

export default function Home() {
  const handleClick = () => {
    let height = window.innerHeight - 75;
    window.scrollTo({
      top: height,
      behavior: 'smooth',
    });
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      <MiddleFadeBar>
        <div onClick={handleClick}>
          <h2>Home</h2>
          <IoIosArrowDown />
        </div>
      </MiddleFadeBar>
      <ContentsWrapper>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          tincidunt nisl, eu aliquam nisl. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          tincidunt nisl, eu aliquam nisl. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          tincidunt nisl, eu aliquam nisl. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          tincidunt nisl, eu aliquam nisl. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          tincidunt nisl, eu aliquam nisl. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi.
        </p>
        <ToTop onClick={scrollToTop}>
          <IoIosArrowUp />
          <p>To top</p>
        </ToTop>
      </ContentsWrapper>
    </div>
  );
}
