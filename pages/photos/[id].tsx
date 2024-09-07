import React from "react";
import LightboxPhoto from "../../components/Lightbox/Photo";
import Footer from "../../components/Footer";
import { SEO } from "../../components/SEO";
import { photos } from "../../constants";

export default function Photo({ photo }) {
  return (
    <>
      <SEO
        seo={{
          title: photo.description || "A photo",
          path: `/photos/${photo.id}`,
          image: `${photo.url}?w=1600&h=900&fit=fill`,
        }}
      />

      <div className="sm:h-screen">
        <LightboxPhoto photo={photo} />
      </div>
      <div className="flex justify-center px-4 pb-20 sm:pb-8">
        <div className="w-full max-w-main grow">
          <Footer />
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const paths = photos.map((photo) => ({
    params: { id: photo.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const photo = photos.find((p) => p.id === params.id);

  if (!photo) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      photo,
    },
  };
}
