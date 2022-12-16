import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import Image from '../elements/Image';
import {Modal} from 'antd';
import BookService from './BookSerivce/index';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const[isModalOpen,setCloseModal]=useState(false);
   
  const handleShow =(e)=> {
    e.preventDefault();
    setCloseModal(true);
  }
  const handleCancel =(e)=>{
    e.preventDefault();
    setCloseModal(false);
  }


  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Experience the best car services in <span className="text-color-primary">INDIA</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32  reveal-from-bottom" data-reveal-delay="400">
                Request Service In Just Few Steps , Stay Updated With Your Service Status .
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <Button onClick={handleShow} tag="a" className="rounded-full" color="primary" wideMobile href="">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/automobilerepair.jpeg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
        </div>
        <Modal title="Basic Modal" open={isModalOpen} onCancel={handleCancel}>
        <BookService />
        </Modal>
          
        
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;