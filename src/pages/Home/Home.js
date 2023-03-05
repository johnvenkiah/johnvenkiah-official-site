import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { ContentsWrapper, MiddleFadeBar, ScrollElement } from './Home.styled';

export default function Home() {
  const ScrollHandler = (pix) => {
    window.scrollTo({
      top: pix,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <MiddleFadeBar>
        <ScrollElement onClick={() => ScrollHandler(window.innerHeight - 75)}>
          <h2>Home</h2>
          <IoIosArrowDown />
        </ScrollElement>
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
        <ScrollElement onClick={() => ScrollHandler(0)}>
          <IoIosArrowUp />
          <p>To top</p>
        </ScrollElement>
      </ContentsWrapper>
    </div>
  );
}
