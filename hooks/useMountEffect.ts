/* eslint-disable react-hooks/exhaustive-deps */
import { EffectCallback, useEffect } from 'react';

const useMountEffect = (effectFunction:EffectCallback) => useEffect(effectFunction, []);

export default useMountEffect;
