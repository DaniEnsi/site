import React from "react";
import { SEO } from "../../components/SEO";
import Footer from "../../components/Footer";
import Masonry from "../../components/Layouts/Masonry";
import { Container } from "../../components/Layouts";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Lightbox from "../../components/Lightbox";
import LightboxPhoto from "../../components/Lightbox/Photo";
import Badge from "../../components/Badge";
import { photos } from "../../constants";

const Dialog = dynamic(() => import("../../components/Dialog"), {
  loading: () => null,
  ssr: false,
});

export default function Photos() {
  const router = useRouter();

  return (
    <>
      <SEO
        seo={{
          title: "Photos",
          path: "/photos",
        }}
      />

      <Container>
        <div className="flex items-center justify-between pb-6 sm:pb-12 gap-2">
          <h1 className="text-2xl text-neutral-800 [font-variation-settings:'opsz'_32,_'wght'_500] dark:text-white sm:text-3xl">
            Photos
          </h1>
          <Badge>Work in Progress</Badge>
        </div>
      </Container>

      <Lightbox
        isOpen={!!router.query.id}
        onDismiss={() => router.push("/photos", undefined, { scroll: false })}
      >
        <LightboxPhoto
          photo={photos.find((photo) => photo.id === router.query.id)}
        />
      </Lightbox>

      <div className="p-2">
        <Masonry photos={photos} />
      </div>

      <div className="flex justify-center px-4 pb-20 sm:pb-8">
        <div className="w-full max-w-main grow">
          <Footer />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      photos: photos,
    },
  };
}
