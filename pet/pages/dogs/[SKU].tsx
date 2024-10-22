import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

interface DogFullPageProps {
  dog: IDogItem;
}

import style from '../../styles/DogFullPage.module.scss';
import Slider from '../../components/Slider';
import Link from 'next/link';
import Button from '../../components/UI/Button';
import { IDogItem } from '../../components/Search';

const DogFullPage: NextPage<DogFullPageProps> = ({ dog }) => {
  const title = `${dog.title} | Monito`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <div className="container">
          <div className={`${style.body}`}>
            <div className={`${style.bodyColumn}`}>
              <Slider images={dog.images} />
              <img
                className={`${style.guarantee}`}
                src="/static/img/dog-guarantee.png"
                alt=""
              />
            </div>
            <div className={`${style.bodyColumn}`}>
              <div className={`${style.path}`}>
                <Link href={'/'}>
                  <a>Home</a>
                </Link>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5303 8.46967C11.2374 8.17678 10.7626 8.17678 10.4697 8.46967C10.1768 8.76256 10.1768 9.23744 10.4697 9.53033L11.5303 8.46967ZM14 12L14.5303 12.5303C14.8232 12.2374 14.8232 11.7626 14.5303 11.4697L14 12ZM10.4697 14.4697C10.1768 14.7626 10.1768 15.2374 10.4697 15.5303C10.7626 15.8232 11.2374 15.8232 11.5303 15.5303L10.4697 14.4697ZM10.4697 9.53033L13.4697 12.5303L14.5303 11.4697L11.5303 8.46967L10.4697 9.53033ZM13.4697 11.4697L10.4697 14.4697L11.5303 15.5303L14.5303 12.5303L13.4697 11.4697Z"
                    fill="#667479"
                  />
                </svg>

                <Link href={'/dogs'}>
                  <a>Dogs</a>
                </Link>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5303 8.46967C11.2374 8.17678 10.7626 8.17678 10.4697 8.46967C10.1768 8.76256 10.1768 9.23744 10.4697 9.53033L11.5303 8.46967ZM14 12L14.5303 12.5303C14.8232 12.2374 14.8232 11.7626 14.5303 11.4697L14 12ZM10.4697 14.4697C10.1768 14.7626 10.1768 15.2374 10.4697 15.5303C10.7626 15.8232 11.2374 15.8232 11.5303 15.5303L10.4697 14.4697ZM10.4697 9.53033L13.4697 12.5303L14.5303 11.4697L11.5303 8.46967L10.4697 9.53033ZM13.4697 11.4697L10.4697 14.4697L11.5303 15.5303L14.5303 12.5303L13.4697 11.4697Z"
                    fill="#667479"
                  />
                </svg>
                <Link href={'/dogs/' + dog.SKU}>
                  <a>{dog.title}</a>
                </Link>
              </div>
              <p className={`${style.suptitle}`}>SKU #{dog.SKU}</p>
              <h3 className={`${style.title}`}>{dog.title}</h3>
              <p className={`${style.price}`}>
                {dog.price.toLocaleString('ua-UA', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </p>
              <div className={`${style.buttonsRow}`}>
                <Button>Contact Us</Button>
                <Button border>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.59961 19.9203L4.97491 19.1395L4.97491 19.1395L5.59961 19.9203ZM3.21799 5.09204L4.10899 5.54603L3.21799 5.09204ZM4.0918 4.21799L4.54579 5.10899L4.0918 4.21799ZM4.00098 20.9194L3.9999 19.9194L4.00098 20.9194ZM3.21846 20.5432L4 19.9194H4L3.21846 20.5432ZM8.29932 18.0408L8.50036 19.0204L8.50036 19.0204L8.29932 18.0408ZM7.79172 18.219L7.33677 17.3285L7.79172 18.219ZM20.7822 16.908L19.8912 16.454L20.7822 16.908ZM19.9078 17.782L19.4538 16.891L19.9078 17.782ZM20.7822 5.09204L19.8912 5.54603V5.54603L20.7822 5.09204ZM19.9078 4.21799L20.3618 3.32698V3.32698L19.9078 4.21799ZM16 11V10C15.4477 10 15 10.4477 15 11H16ZM16.002 11L17.0017 11.0234C17.008 10.7542 16.9055 10.4938 16.7173 10.3012C16.5292 10.1086 16.2713 10 16.002 10V11ZM16.002 11.002L15.978 12.0017C16.2433 12.0081 16.5002 11.9087 16.6921 11.7256C16.8841 11.5425 16.9955 11.2906 17.0017 11.0254L16.002 11.002ZM16 11.002H15C15 11.5449 15.4333 11.9887 15.9761 12.0017L16 11.002ZM12 11V10C11.4477 10 11 10.4477 11 11H12ZM12.002 11L13.0017 11.0234C13.008 10.7542 12.9055 10.4938 12.7173 10.3012C12.5292 10.1086 12.2713 10 12.002 10V11ZM12.002 11.002L11.978 12.0017C12.2433 12.0081 12.5002 11.9087 12.6921 11.7256C12.8841 11.5425 12.9955 11.2906 13.0017 11.0254L12.002 11.002ZM12 11.002H11C11 11.5449 11.4333 11.9887 11.9761 12.0017L12 11.002ZM8 11V10C7.44772 10 7 10.4477 7 11H8ZM8.002 11L9.00173 11.0234C9.00802 10.7542 8.90548 10.4938 8.71732 10.3012C8.52915 10.1086 8.27127 10 8.002 10V11ZM8.00195 11.002L7.97803 12.0017C8.24327 12.0081 8.50016 11.9087 8.69215 11.7256C8.88413 11.5425 8.99548 11.2906 9.00168 11.0254L8.00195 11.002ZM8 11.002H7C7 11.5449 7.43327 11.9887 7.97608 12.0017L8 11.002ZM20 7.19995V14.8H22V7.19995H20ZM17.8001 17H9.12256V19H17.8001V17ZM6.49888 17.9203L4.97491 19.1395L6.2243 20.7012L7.74827 19.482L6.49888 17.9203ZM4 18.671V7.19995H2V18.671H4ZM6.2002 5H17.8002V3H6.2002V5ZM4 7.19995C4 6.6234 4.00078 6.25114 4.02393 5.96783C4.04612 5.6962 4.0838 5.59549 4.10899 5.54603L2.32698 4.63805C2.13419 5.01642 2.06287 5.40961 2.03057 5.80495C1.99922 6.18861 2 6.6564 2 7.19995H4ZM6.2002 3C5.65663 3 5.18874 2.99922 4.80498 3.03057C4.40962 3.06286 4.01624 3.13416 3.63781 3.32698L4.54579 5.10899C4.59517 5.08383 4.69595 5.04613 4.9678 5.02393C5.25126 5.00078 5.62365 5 6.2002 5V3ZM4.10899 5.54603C4.205 5.35761 4.35788 5.20474 4.54579 5.10899L3.63781 3.32698C3.07306 3.61473 2.61447 4.07382 2.32698 4.63805L4.10899 5.54603ZM4.97491 19.1395C4.54329 19.4848 4.27296 19.6997 4.06808 19.8352C3.84771 19.9809 3.86555 19.9195 3.9999 19.9194L4.00206 21.9194C4.48658 21.9189 4.88765 21.6909 5.171 21.5036C5.46986 21.306 5.82376 21.0216 6.22431 20.7012L4.97491 19.1395ZM2 18.671C2 19.1839 1.99901 19.6378 2.03141 19.9946C2.06213 20.3328 2.13463 20.7884 2.43691 21.1671L4 19.9194C4.08382 20.0244 4.0471 20.0767 4.02321 19.8137C4.00099 19.5691 4 19.2237 4 18.671H2ZM3.9999 19.9194L4 19.9194L2.43691 21.1671C2.81682 21.643 3.39286 21.9201 4.00206 21.9194L3.9999 19.9194ZM9.12256 17C8.74662 17 8.41972 16.9953 8.09827 17.0613L8.50036 19.0204C8.57685 19.0047 8.66643 19 9.12256 19V17ZM7.74827 19.482C8.10429 19.1972 8.17709 19.1451 8.24667 19.1095L7.33677 17.3285C7.04459 17.4777 6.79259 17.6853 6.49888 17.9203L7.74827 19.482ZM8.09827 17.0613C7.83313 17.1157 7.57715 17.2057 7.33677 17.3285L8.24667 19.1095C8.32723 19.0684 8.41245 19.0385 8.50036 19.0204L8.09827 17.0613ZM20 14.8C20 15.3766 19.9993 15.7489 19.9762 16.0323C19.954 16.3041 19.9163 16.4047 19.8912 16.454L21.6732 17.362C21.8661 16.9835 21.9373 16.5902 21.9696 16.1949C22.0008 15.8112 22 15.3434 22 14.8H20ZM17.8001 19C18.3436 19 18.8114 19.0008 19.195 18.9694C19.5903 18.9371 19.9834 18.8658 20.3618 18.673L19.4538 16.891C19.4043 16.9162 19.3036 16.9539 19.0321 16.9761C18.7488 16.9992 18.3766 17 17.8001 17V19ZM19.8912 16.454C19.7956 16.6417 19.6425 16.7948 19.4538 16.891L20.3618 18.673C20.9257 18.3856 21.3854 17.927 21.6732 17.362L19.8912 16.454ZM22 7.19995C22 6.6565 22.0008 6.1887 21.9695 5.80511C21.9373 5.40983 21.8661 5.01653 21.6732 4.63805L19.8912 5.54603C19.9164 5.59537 19.954 5.69598 19.9762 5.96767C19.9993 6.25105 20 6.6233 20 7.19995H22ZM17.8002 5C18.3768 5 18.7489 5.00078 19.0321 5.02393C19.3036 5.04611 19.4043 5.08377 19.4538 5.10899L20.3618 3.32698C19.9835 3.13421 19.5904 3.06288 19.1951 3.03057C18.8115 2.99922 18.3437 3 17.8002 3V5ZM21.6732 4.63805C21.3854 4.07316 20.9259 3.61439 20.3618 3.32698L19.4538 5.10899C19.6424 5.20507 19.7956 5.35828 19.8912 5.54603L21.6732 4.63805ZM16 12H16.002V10H16V12ZM15.0023 10.9766L15.0022 10.9786L17.0017 11.0254L17.0017 11.0234L15.0023 10.9766ZM16.0259 10.0023L16.0239 10.0022L15.9761 12.0017L15.978 12.0017L16.0259 10.0023ZM17 11.002V11H15V11.002H17ZM12 12H12.002V10H12V12ZM11.0023 10.9766L11.0022 10.9786L13.0017 11.0254L13.0017 11.0234L11.0023 10.9766ZM12.0259 10.0023L12.0239 10.0022L11.9761 12.0017L11.978 12.0017L12.0259 10.0023ZM13 11.002V11H11V11.002H13ZM8 12H8.002V10H8V12ZM7.00227 10.9766L7.00223 10.9786L9.00168 11.0254L9.00173 11.0234L7.00227 10.9766ZM8.02587 10.0023L8.02392 10.0022L7.97608 12.0017L7.97803 12.0017L8.02587 10.0023ZM9 11.002V11H7V11.002H9Z"
                      fill="#002A48"
                    />
                  </svg>
                  Chat with Monito
                </Button>
              </div>
              <div className={`${style.info}`}>
                <div className={`${style.infoRow}`}>
                  <span className={`${style.infoItem}`}>SKU</span>
                  <span className={`${style.infoItem}`}>: {dog.SKU}</span>
                </div>
                <div className={`${style.infoRow}`}>
                  <span className={`${style.infoItem}`}>Gender</span>
                  <span className={`${style.infoItem}`}>: {dog.gene}</span>
                </div>
                <div className={`${style.infoRow}`}>
                  <span className={`${style.infoItem}`}>Age</span>
                  <span className={`${style.infoItem}`}>: {dog.age}</span>
                </div>
                <div className={`${style.infoRow}`}>
                  <span className={`${style.infoItem}`}>Size</span>
                  <span className={`${style.infoItem}`}>: {dog.size}</span>
                </div>
                <div className={`${style.infoRow}`}>
                  <span className={`${style.infoItem}`}>Color</span>
                  <span className={`${style.infoItem}`}>: {dog.color}</span>
                </div>
                <div className={`${style.infoRow}`}>
                  <span className={`${style.infoItem}`}>Vaccinated</span>
                  <span className={`${style.infoItem}`}>
                    : {dog.vaccinated}
                  </span>
                </div>
                <div className={`${style.infoRow}`}>
                  <span className={`${style.infoItem}`}>Dewormed</span>
                  <span className={`${style.infoItem}`}>: {dog.dewormed}</span>
                </div>
                <div className={`${style.infoRow}`}>
                  <span className={`${style.infoItem}`}>Cert</span>
                  <span className={`${style.infoItem}`}>: {dog.cert}</span>
                </div>
                <div className={`${style.infoRow}`}>
                  <span className={`${style.infoItem}`}>Microchip</span>
                  <span className={`${style.infoItem}`}>: {dog.microchip}</span>
                </div>
                <div className={`${style.infoRow}`}>
                  <span className={`${style.infoItem}`}>Location</span>
                  <span className={`${style.infoItem}`}>: {dog.location}</span>
                </div>
                <div className={`${style.infoRow}`}>
                  <span className={`${style.infoItem}`}>Published Date</span>
                  <span className={`${style.infoItem}`}>: {dog.published}</span>
                </div>
                {dog.additionalInfo && (
                  <div className={`${style.infoRow}`}>
                    <span className={`${style.infoItem}`}>
                      Additional Information
                    </span>
                    <span className={`${style.infoItem}`}>
                      : {dog.additionalInfo}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DogFullPage;

DogFullPage.getInitialProps = async (props) => {
  const { SKU } = props.query;
  const res = await fetch(
    `https://6358307cc26aac906f3dda7a.mockapi.io/dogs?SKU=${SKU}`
  ).then((res) => res.json());
  return { dog: res[0] };
};