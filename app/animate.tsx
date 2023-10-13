"use client"

import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<Props> = ({ children }) => (
  <>
    <AnimatePresence>
      <motion.div
        initial={{opacity: 0, y: 15}}
        animate={{opacity: 1, y: 1}}
        exit={{opacity: 0, y: 15}}
        transition={{delay: 0.25 }}
      
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
);
