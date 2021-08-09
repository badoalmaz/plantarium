import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import { IconButton } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
const Footer = () => {
  return (
    <div
      class='col-12'
      style={{
        background: "linear-gradient(to right bottom,  #020e02, #016f5e)",
      }}
    >
      <footer class=' text-center text-white'>
        <div class='container p-4'>
          <section class='mb-4'>
            <IconButton class='btn btn-outline-light btn-floating m-1'>
              <FacebookIcon color='primery' />
            </IconButton>

            <IconButton class='btn btn-outline-light btn-floating m-1'>
              <TwitterIcon color='primery' />
            </IconButton>

            <IconButton class='btn btn-outline-light btn-floating m-1'>
              <InstagramIcon color='primery' />
            </IconButton>

            <IconButton class='btn btn-outline-light btn-floating m-1'>
              <LinkedInIcon color='primery' />
            </IconButton>

            <IconButton class='btn btn-outline-light btn-floating m-1'>
              <YouTubeIcon color='primery' />
            </IconButton>
          </section>

          <section class=''>
            <form action=''>
              <div class='row d-flex justify-content-center'>
                <div class='col-auto'>
                  <p class='pt-2'>
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div class='col-md-5 col-12'>
                  <div class='form-outline form-white mb-4'>
                    <input
                      type='email'
                      id='form5Example2'
                      class='form-control'
                    />
                    <label class='form-label' for='form5Example2'>
                      Email address
                    </label>
                  </div>
                </div>

                <div class='col-auto'>
                  <button type='submit' class='btn btn-outline-light mb-4'>
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section class='mb-4'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p>
          </section>
        </div>

        <div
          class='text-center p-3'
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021
          <a class='text-white' href='https://mdbootstrap.com/'>
            Plantarium.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
