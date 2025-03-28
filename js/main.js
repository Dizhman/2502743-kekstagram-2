/**
 * генерация фотографий из массива
 * есть 25 объектов фотографий со своим id
 * для каждого фото генерируем случайный коментарий(0-30)
 * каждый коментарий получает свой id,случайную аватарку,уведомпение и имя
 * @param {getRandomInteger} : boolean - функция генерирующая случайное число в заданом диапазоне
 * @param {getRandomArrayElement} - функция которая возвращает случайный элемент с массива
 * @param {generateFotos} - создаёт массивы с возможными описаниями,коментариями и именами
 * @return {boolean} - возвращает случайный елемент из массива
 * @param {photoArray} - генерирует случайный объект из массива
 */

import { generatePhotos } from './data.js';

const photoArray = generatePhotos();
