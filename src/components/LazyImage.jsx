import { useState } from "react";
import { motion } from "framer-motion";

export default function LazyImage({ src, alt, wrapperClassName, imgClassName, imgStyle }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${wrapperClassName || ""}`}>
      {!loaded && (
        <div 
          className={`absolute inset-0 bg-slate-200 dark:bg-gray-700 animate-pulse ${imgClassName}`} 
          style={imgStyle}
        />
      )}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={imgClassName}
        style={imgStyle}
      />
    </div>
  );
}
