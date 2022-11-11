import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo_ngxchart';
  data = [
    {
      name: 'Tháng 1',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 20,
        },
        {
          name: 'Doanh thu giảm',
          value: 1,
        },
        {
          name: 'Doanh thu ròng',
          value: 19,
        },
      ],
    },
    {
      name: 'Tháng 2',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 25,
        },
        {
          name: 'Doanh thu giảm',
          value: 4,
        },
        {
          name: 'Doanh thu ròng',
          value: 21,
        },
      ],
    },
    {
      name: 'Tháng 3',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 40,
        },
        {
          name: 'Doanh thu giảm',
          value: 7,
        },
        {
          name: 'Doanh thu ròng',
          value: 33,
        },
      ],
    },
    {
      name: 'Tháng 4',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 30,
        },
        {
          name: 'Doanh thu giảm',
          value: 9,
        },
        {
          name: 'Doanh thu ròng',
          value: 25,
        },
      ],
    },
    {
      name: 'Tháng 5',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 32,
        },
        {
          name: 'Doanh thu giảm',
          value: 10,
        },
        {
          name: 'Doanh thu ròng',
          value: 22,
        },
      ],
    },
    {
      name: 'Tháng 6',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 31,
        },
        {
          name: 'Doanh thu giảm',
          value: 5,
        },
        {
          name: 'Doanh thu ròng',
          value: 33,
        },
      ],
    },
    {
      name: 'Tháng 7',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 35,
        },
        {
          name: 'Doanh thu giảm',
          value: 7,
        },
        {
          name: 'Doanh thu ròng',
          value: 15,
        },
      ],
    },
    {
      name: 'Tháng 8',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 48,
        },
        {
          name: 'Doanh thu giảm',
          value: 8,
        },
        {
          name: 'Doanh thu ròng',
          value: 23,
        },
      ],
    },
    {
      name: 'Tháng 9',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 50,
        },
        {
          name: 'Doanh thu giảm',
          value: 9,
        },
        {
          name: 'Doanh thu ròng',
          value: 22,
        },
      ],
    },
    {
      name: 'Tháng 10',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 55,
        },
        {
          name: 'Doanh thu giảm',
          value: 15,
        },
        {
          name: 'Doanh thu ròng',
          value: 28,
        },
      ],
    },
    {
      name: 'Tháng 11',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 45,
        },
        {
          name: 'Doanh thu giảm',
          value: 12,
        },
        {
          name: 'Doanh thu ròng',
          value: 24,
        },
      ],
    },
    {
      name: 'Tháng 12',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 38,
        },
        {
          name: 'Doanh thu giảm',
          value: 15,
        },
        {
          name: 'Doanh thu ròng',
          value: 30,
        },
      ],
    },
  ];

  data2 = [
    {
      name: 'Doanh thu gộp',
      series: [
        {
          name: 'Tháng 1',
          value: 20,
        },
        {
          name: 'Tháng 2',
          value: 25,
        },
        {
          name: 'Tháng 3',
          value: 40,
        },
        {
          name: 'Tháng 4',
          value: 30,
        },
        {
          name: 'Tháng 5',
          value: 32,
        },
        {
          name: 'Tháng 6',
          value: 31,
        },
        {
          name: 'Tháng 7',
          value: 35,
        },
        {
          name: 'Tháng 8',
          value: 48,
        },
        {
          name: 'Tháng 9',
          value: 50,
        },
        {
          name: 'Tháng 10',
          value: 55,
        },
        {
          name: 'Tháng 11',
          value: 45,
        },
        {
          name: 'Tháng 12',
          value: 38,
        },
      ],
    },
    {
      name: 'Doanh thu giảm',
      series: [
        {
          name: 'Tháng 1',
          value: 1,
        },
        {
          name: 'Tháng 2',
          value: 4,
        },
        {
          name: 'Tháng 3',
          value: 7,
        },
        {
          name: 'Tháng 4',
          value: 9,
        },
        {
          name: 'Tháng 5',
          value: 10,
        },
        {
          name: 'Tháng 6',
          value: 5,
        },
        {
          name: 'Tháng 7',
          value: 7,
        },
        {
          name: 'Tháng 8',
          value: 8,
        },
        {
          name: 'Tháng 9',
          value: 9,
        },
        {
          name: 'Tháng 10',
          value: 15,
        },
        {
          name: 'Tháng 11',
          value: 12,
        },
        {
          name: 'Tháng 12',
          value: 15,
        },
      ],
    },
    {
      name: 'Doanh thu ròng',
      series: [
        {
          name: 'Tháng 1',
          value: 19,
        },
        {
          name: 'Tháng 2',
          value: 21,
        },
        {
          name: 'Tháng 3',
          value: 33,
        },
        {
          name: 'Tháng 4',
          value: 25,
        },
        {
          name: 'Tháng 5',
          value: 22,
        },
        {
          name: 'Tháng 6',
          value: 33,
        },
        {
          name: 'Tháng 7',
          value: 15,
        },
        {
          name: 'Tháng 8',
          value: 23,
        },
        {
          name: 'Tháng 9',
          value: 22,
        },
        {
          name: 'Tháng 10',
          value: 28,
        },
        {
          name: 'Tháng 11',
          value: 24,
        },
        {
          name: 'Tháng 12',
          value: 30,
        },
      ],
    },
  ];

  dataweek = [
    {
      name: 'Tuần 1',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 20,
        },
        {
          name: 'Doanh thu giảm',
          value: 1,
        },
        {
          name: 'Doanh thu ròng',
          value: 19,
        },
      ],
    },
    {
      name: 'Tuần 2',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 25,
        },
        {
          name: 'Doanh thu giảm',
          value: 4,
        },
        {
          name: 'Doanh thu ròng',
          value: 21,
        },
      ],
    },
    {
      name: 'Tuần 3',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 40,
        },
        {
          name: 'Doanh thu giảm',
          value: 7,
        },
        {
          name: 'Doanh thu ròng',
          value: 33,
        },
      ],
    },
    {
      name: 'Tuần 4',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 30,
        },
        {
          name: 'Doanh thu giảm',
          value: 9,
        },
        {
          name: 'Doanh thu ròng',
          value: 25,
        },
      ],
    },
    {
      name: 'Tuần 5',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 32,
        },
        {
          name: 'Doanh thu giảm',
          value: 10,
        },
        {
          name: 'Doanh thu ròng',
          value: 22,
        },
      ],
    },
    {
      name: 'Tuần 6',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 31,
        },
        {
          name: 'Doanh thu giảm',
          value: 5,
        },
        {
          name: 'Doanh thu ròng',
          value: 33,
        },
      ],
    },
    {
      name: 'Tuần 7',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 35,
        },
        {
          name: 'Doanh thu giảm',
          value: 7,
        },
        {
          name: 'Doanh thu ròng',
          value: 15,
        },
      ],
    },
    {
      name: 'Tuần 8',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 48,
        },
        {
          name: 'Doanh thu giảm',
          value: 8,
        },
        {
          name: 'Doanh thu ròng',
          value: 23,
        },
      ],
    },
    {
      name: 'Tuần 9',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 50,
        },
        {
          name: 'Doanh thu giảm',
          value: 9,
        },
        {
          name: 'Doanh thu ròng',
          value: 22,
        },
      ],
    },
    {
      name: 'Tuần 10',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 55,
        },
        {
          name: 'Doanh thu giảm',
          value: 15,
        },
        {
          name: 'Doanh thu ròng',
          value: 28,
        },
      ],
    },
    {
      name: 'Tuần 11',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 45,
        },
        {
          name: 'Doanh thu giảm',
          value: 12,
        },
        {
          name: 'Doanh thu ròng',
          value: 24,
        },
      ],
    },
    {
      name: 'Tuần 12',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 38,
        },
        {
          name: 'Doanh thu giảm',
          value: 15,
        },
        {
          name: 'Doanh thu ròng',
          value: 30,
        },
      ],
    },
    {
      name: 'Tuần 13',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 44,
        },
        {
          name: 'Doanh thu giảm',
          value: 21,
        },
        {
          name: 'Doanh thu ròng',
          value: 36,
        },
      ],
    },
    {
      name: 'Tuần 14',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 47,
        },
        {
          name: 'Doanh thu giảm',
          value: 24,
        },
        {
          name: 'Doanh thu ròng',
          value: 39,
        },
      ],
    },
    {
      name: 'Tuần 15',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 50,
        },
        {
          name: 'Doanh thu giảm',
          value: 27,
        },
        {
          name: 'Doanh thu ròng',
          value: 42,
        },
      ],
    },
    {
      name: 'Tuần 16',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 53,
        },
        {
          name: 'Doanh thu giảm',
          value: 30,
        },
        {
          name: 'Doanh thu ròng',
          value: 45,
        },
      ],
    },
    {
      name: 'Tuần 17',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 56,
        },
        {
          name: 'Doanh thu giảm',
          value: 33,
        },
        {
          name: 'Doanh thu ròng',
          value: 48,
        },
      ],
    },
    {
      name: 'Tuần 18',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 59,
        },
        {
          name: 'Doanh thu giảm',
          value: 36,
        },
        {
          name: 'Doanh thu ròng',
          value: 51,
        },
      ],
    },
    {
      name: 'Tuần 19',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 62,
        },
        {
          name: 'Doanh thu giảm',
          value: 39,
        },
        {
          name: 'Doanh thu ròng',
          value: 54,
        },
      ],
    },
    {
      name: 'Tuần 20',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 65,
        },
        {
          name: 'Doanh thu giảm',
          value: 42,
        },
        {
          name: 'Doanh thu ròng',
          value: 57,
        },
      ],
    },
    {
      name: 'Tuần 21',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 68,
        },
        {
          name: 'Doanh thu giảm',
          value: 45,
        },
        {
          name: 'Doanh thu ròng',
          value: 60,
        },
      ],
    },
    {
      name: 'Tuần 22',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 71,
        },
        {
          name: 'Doanh thu giảm',
          value: 48,
        },
        {
          name: 'Doanh thu ròng',
          value: 63,
        },
      ],
    },
    {
      name: 'Tuần 23',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 74,
        },
        {
          name: 'Doanh thu giảm',
          value: 51,
        },
        {
          name: 'Doanh thu ròng',
          value: 66,
        },
      ],
    },
    {
      name: 'Tuần 24',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 77,
        },
        {
          name: 'Doanh thu giảm',
          value: 54,
        },
        {
          name: 'Doanh thu ròng',
          value: 69,
        },
      ],
    },
    {
      name: 'Tuần 25',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 80,
        },
        {
          name: 'Doanh thu giảm',
          value: 57,
        },
        {
          name: 'Doanh thu ròng',
          value: 72,
        },
      ],
    },
    {
      name: 'Tuần 26',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 83,
        },
        {
          name: 'Doanh thu giảm',
          value: 15,
        },
        {
          name: 'Doanh thu ròng',
          value: 30,
        },
      ],
    },
    {
      name: 'Tuần 27',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 86,
        },
        {
          name: 'Doanh thu giảm',
          value: 63,
        },
        {
          name: 'Doanh thu ròng',
          value: 78,
        },
      ],
    },
    {
      name: 'Tuần 28',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 89,
        },
        {
          name: 'Doanh thu giảm',
          value: 66,
        },
        {
          name: 'Doanh thu ròng',
          value: 81,
        },
      ],
    },
    {
      name: 'Tuần 29',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 92,
        },
        {
          name: 'Doanh thu giảm',
          value: 69,
        },
        {
          name: 'Doanh thu ròng',
          value: 84,
        },
      ],
    },
    {
      name: 'Tuần 30',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 95,
        },
        {
          name: 'Doanh thu giảm',
          value: 72,
        },
        {
          name: 'Doanh thu ròng',
          value: 87,
        },
      ],
    },
    {
      name: 'Tuần 31',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 98,
        },
        {
          name: 'Doanh thu giảm',
          value: 75,
        },
        {
          name: 'Doanh thu ròng',
          value: 90,
        },
      ],
    },
    {
      name: 'Tuần 32',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 101,
        },
        {
          name: 'Doanh thu giảm',
          value: 78,
        },
        {
          name: 'Doanh thu ròng',
          value: 93,
        },
      ],
    },
    {
      name: 'Tuần 33',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 104,
        },
        {
          name: 'Doanh thu giảm',
          value: 81,
        },
        {
          name: 'Doanh thu ròng',
          value: 96,
        },
      ],
    },
    {
      name: 'Tuần 34',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 107,
        },
        {
          name: 'Doanh thu giảm',
          value: 84,
        },
        {
          name: 'Doanh thu ròng',
          value: 99,
        },
      ],
    },
    {
      name: 'Tuần 35',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 110,
        },
        {
          name: 'Doanh thu giảm',
          value: 87,
        },
        {
          name: 'Doanh thu ròng',
          value: 102,
        },
      ],
    },
    {
      name: 'Tuần 36',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 113,
        },
        {
          name: 'Doanh thu giảm',
          value: 90,
        },
        {
          name: 'Doanh thu ròng',
          value: 105,
        },
      ],
    },
    {
      name: 'Tuần 37',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 116,
        },
        {
          name: 'Doanh thu giảm',
          value: 93,
        },
        {
          name: 'Doanh thu ròng',
          value: 108,
        },
      ],
    },
    {
      name: 'Tuần 38',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 119,
        },
        {
          name: 'Doanh thu giảm',
          value: 96,
        },
        {
          name: 'Doanh thu ròng',
          value: 111,
        },
      ],
    },
    {
      name: 'Tuần 39',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 122,
        },
        {
          name: 'Doanh thu giảm',
          value: 99,
        },
        {
          name: 'Doanh thu ròng',
          value: 114,
        },
      ],
    },
    {
      name: 'Tuần 40',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 125,
        },
        {
          name: 'Doanh thu giảm',
          value: 102,
        },
        {
          name: 'Doanh thu ròng',
          value: 117,
        },
      ],
    },
    {
      name: 'Tuần 41',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 128,
        },
        {
          name: 'Doanh thu giảm',
          value: 105,
        },
        {
          name: 'Doanh thu ròng',
          value: 120,
        },
      ],
    },
    {
      name: 'Tuần 42',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 131,
        },
        {
          name: 'Doanh thu giảm',
          value: 108,
        },
        {
          name: 'Doanh thu ròng',
          value: 123,
        },
      ],
    },
    {
      name: 'Tuần 43',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 134,
        },
        {
          name: 'Doanh thu giảm',
          value: 111,
        },
        {
          name: 'Doanh thu ròng',
          value: 126,
        },
      ],
    },
    {
      name: 'Tuần 44',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 137,
        },
        {
          name: 'Doanh thu giảm',
          value: 114,
        },
        {
          name: 'Doanh thu ròng',
          value: 129,
        },
      ],
    },
    {
      name: 'Tuần 45',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 140,
        },
        {
          name: 'Doanh thu giảm',
          value: 117,
        },
        {
          name: 'Doanh thu ròng',
          value: 132,
        },
      ],
    },
    {
      name: 'Tuần 46',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 143,
        },
        {
          name: 'Doanh thu giảm',
          value: 120,
        },
        {
          name: 'Doanh thu ròng',
          value: 135,
        },
      ],
    },
    {
      name: 'Tuần 47',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 146,
        },
        {
          name: 'Doanh thu giảm',
          value: 123,
        },
        {
          name: 'Doanh thu ròng',
          value: 138,
        },
      ],
    },
    {
      name: 'Tuần 48',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 149,
        },
        {
          name: 'Doanh thu giảm',
          value: 126,
        },
        {
          name: 'Doanh thu ròng',
          value: 141,
        },
      ],
    },
    {
      name: 'Tuần 49',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 152,
        },
        {
          name: 'Doanh thu giảm',
          value: 129,
        },
        {
          name: 'Doanh thu ròng',
          value: 144,
        },
      ],
    },
    {
      name: 'Tuần 50',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 155,
        },
        {
          name: 'Doanh thu giảm',
          value: 132,
        },
        {
          name: 'Doanh thu ròng',
          value: 147,
        },
      ],
    },
    {
      name: 'Tuần 51',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 158,
        },
        {
          name: 'Doanh thu giảm',
          value: 135,
        },
        {
          name: 'Doanh thu ròng',
          value: 150,
        },
      ],
    },
    {
      name: 'Tuần 52',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 161,
        },
        {
          name: 'Doanh thu giảm',
          value: 138,
        },
        {
          name: 'Doanh thu ròng',
          value: 153,
        },
      ],
    },
    {
      name: 'Tuần 53',
      series: [
        {
          name: 'Doanh thu gộp',
          value: 164,
        },
        {
          name: 'Doanh thu giảm',
          value: 141,
        },
        {
          name: 'Doanh thu ròng',
          value: 156,
        },
      ],
    },
  ];

  dataweek2 = [
    {
      name: 'Doanh thu gộp',
      series: [
        {
          name: ' Tuần 1',
          value: 20,
        },
        {
          name: 'Tuần 2',
          value: 25,
        },
        {
          name: 'Tuần 3',
          value: 40,
        },
        {
          name: 'Tuần 4',
          value: 30,
        },
        {
          name: 'Tuần 5',
          value: 32,
        },
        {
          name: 'Tuần 6',
          value: 31,
        },
        {
          name: 'Tuần 7',
          value: 35,
        },
        {
          name: 'Tuần 8',
          value: 48,
        },
        {
          name: 'Tuần 9',
          value: 50,
        },
        {
          name: 'Tuần 10',
          value: 55,
        },
        {
          name: 'Tuần 11',
          value: 45,
        },
        {
          name: 'Tuần 12',
          value: 38,
        },
        {
          name: 'Tuần 13',
          value: 41,
        },
        {
          name: 'Tuần 14',
          value: 44,
        },
        {
          name: 'Tuần 15',
          value: 47,
        },
        {
          name: 'Tuần 16',
          value: 50,
        },
        {
          name: 'Tuần 17',
          value: 53,
        },
        {
          name: 'Tuần 18',
          value: 56,
        },
        {
          name: 'Tuần 19',
          value: 59,
        },
        {
          name: 'Tuần 20',
          value: 62,
        },
        {
          name: 'Tuần 21',
          value: 65,
        },
        {
          name: 'Tuần 22',
          value: 68,
        },
        {
          name: 'Tuần 23',
          value: 71,
        },
        {
          name: 'Tuần 24',
          value: 74,
        },
        {
          name: 'Tuần 25',
          value: 77,
        },
        {
          name: 'Tuần 26',
          value: 80,
        },
        {
          name: 'Tuần 27',
          value: 83,
        },
        {
          name: 'Tuần 28',
          value: 86,
        },
        {
          name: 'Tuần 29',
          value: 89,
        },
        {
          name: 'Tuần 30',
          value: 92,
        },
        {
          name: 'Tuần 31',
          value: 94,
        },
        {
          name: 'Tuần 32',
          value: 97,
        },
        {
          name: 'Tuần 33',
          value: 100,
        },
        {
          name: 'Tuần 34',
          value: 103,
        },
        {
          name: 'Tuần 35',
          value: 106,
        },
        {
          name: 'Tuần 36',
          value: 109,
        },
        {
          name: 'Tuần 37',
          value: 112,
        },
        {
          name: 'Tuần 38',
          value: 115,
        },
        {
          name: 'Tuần 39',
          value: 118,
        },
        {
          name: 'Tuần 40',
          value: 121,
        },
        {
          name: 'Tuần 41',
          value: 124,
        },
        {
          name: 'Tuần 42',
          value: 127,
        },
        {
          name: 'Tuần 43',
          value: 130,
        },
        {
          name: 'Tuần 44',
          value: 133,
        },
        {
          name: 'Tuần 45',
          value: 136,
        },
        {
          name: 'Tuần 46',
          value: 139,
        },
        {
          name: 'Tuần 47',
          value: 142,
        },
        {
          name: 'Tuần 48',
          value: 145,
        },
        {
          name: 'Tuần 49',
          value: 148,
        },
        {
          name: 'Tuần 50',
          value: 151,
        },
        {
          name: 'Tuần 51',
          value: 154,
        },
        {
          name: 'Tuần 52',
          value: 157,
        },
      ],
    },
    {
      name: 'Doanh thu giảm',
      series: [
        {
          name: ' Tuần 1',
          value: 1,
        },
        {
          name: 'Tuần 2',
          value: 4,
        },
        {
          name: 'Tuần 3',
          value: 7,
        },
        {
          name: 'Tuần 4',
          value: 9,
        },
        {
          name: 'Tuần 5',
          value: 10,
        },
        {
          name: 'Tuần 6',
          value: 5,
        },
        {
          name: 'Tuần 7',
          value: 7,
        },
        {
          name: 'Tuần 8',
          value: 8,
        },
        {
          name: 'Tuần 9',
          value: 9,
        },
        {
          name: 'Tuần 10',
          value: 15,
        },
        {
          name: 'Tuần 11',
          value: 12,
        },
        {
          name: 'Tuần 12',
          value: 15,
        },
        {
          name: 'Tuần 13',
          value: 18,
        },
        {
          name: 'Tuần 14',
          value: 21,
        },
        {
          name: 'Tuần 15',
          value: 24,
        },
        {
          name: 'Tuần 16',
          value: 27,
        },
        {
          name: 'Tuần 17',
          value: 30,
        },
        {
          name: 'Tuần 18',
          value: 33,
        },
        {
          name: 'Tuần 19',
          value: 36,
        },
        {
          name: 'Tuần 20',
          value: 39,
        },
        {
          name: 'Tuần 21',
          value: 42,
        },
        {
          name: 'Tuần 22',
          value: 45,
        },
        {
          name: 'Tuần 23',
          value: 48,
        },
        {
          name: 'Tuần 24',
          value: 51,
        },
        {
          name: 'Tuần 25',
          value: 54,
        },
        {
          name: 'Tuần 26',
          value: 57,
        },
        {
          name: 'Tuần 27',
          value: 60,
        },
        {
          name: 'Tuần 28',
          value: 63,
        },
        {
          name: 'Tuần 29',
          value: 66,
        },
        {
          name: 'Tuần 30',
          value: 69,
        },
        {
          name: 'Tuần 31',
          value: 72,
        },
        {
          name: 'Tuần 32',
          value: 75,
        },
        {
          name: 'Tuần 33',
          value: 78,
        },
        {
          name: 'Tuần 34',
          value: 81,
        },
        {
          name: 'Tuần 35',
          value: 84,
        },
        {
          name: 'Tuần 36',
          value: 87,
        },
        {
          name: 'Tuần 37',
          value: 90,
        },
        {
          name: 'Tuần 38',
          value: 93,
        },
        {
          name: 'Tuần 39',
          value: 96,
        },
        {
          name: 'Tuần 40',
          value: 99,
        },
        {
          name: 'Tuần 41',
          value: 102,
        },
        {
          name: 'Tuần 42',
          value: 105,
        },
        {
          name: 'Tuần 43',
          value: 108,
        },
        {
          name: 'Tuần 44',
          value: 111,
        },
        {
          name: 'Tuần 45',
          value: 114,
        },
        {
          name: 'Tuần 46',
          value: 117,
        },
        {
          name: 'Tuần 47',
          value: 120,
        },
        {
          name: 'Tuần 48',
          value: 123,
        },
        {
          name: 'Tuần 49',
          value: 148,
        },
        {
          name: 'Tuần 50',
          value: 126,
        },
        {
          name: 'Tuần 51',
          value: 129,
        },
        {
          name: 'Tuần 52',
          value: 137,
        },
      ],
    },
    {
      name: 'Doanh thu ròng',
      series: [
        {
          name: ' Tuần 1',
          value: 19,
        },
        {
          name: 'Tuần 2',
          value: 21,
        },
        {
          name: 'Tuần 3',
          value: 33,
        },
        {
          name: 'Tuần 4',
          value: 25,
        },
        {
          name: 'Tuần 5',
          value: 22,
        },
        {
          name: 'Tuần 6',
          value: 33,
        },
        {
          name: 'Tuần 7',
          value: 15,
        },
        {
          name: 'Tuần 8',
          value: 23,
        },
        {
          name: 'Tuần 9',
          value: 22,
        },
        {
          name: 'Tuần 10',
          value: 28,
        },
        {
          name: 'Tuần 11',
          value: 24,
        },
        {
          name: 'Tuần 12',
          value: 30,
        },
        {
          name: 'Tuần 13',
          value: 33,
        },
        {
          name: 'Tuần 14',
          value: 36,
        },
        {
          name: 'Tuần 15',
          value: 39,
        },
        {
          name: 'Tuần 16',
          value: 42,
        },
        {
          name: 'Tuần 17',
          value: 45,
        },
        {
          name: 'Tuần 18',
          value: 48,
        },
        {
          name: 'Tuần 19',
          value: 51,
        },
        {
          name: 'Tuần 20',
          value: 54,
        },
        {
          name: 'Tuần 21',
          value: 57,
        },
        {
          name: 'Tuần 22',
          value: 60,
        },
        {
          name: 'Tuần 23',
          value: 63,
        },
        {
          name: 'Tuần 24',
          value: 66,
        },
        {
          name: 'Tuần 25',
          value: 69,
        },
        {
          name: 'Tuần 26',
          value: 72,
        },
        {
          name: 'Tuần 27',
          value: 75,
        },
        {
          name: 'Tuần 28',
          value: 78,
        },
        {
          name: 'Tuần 29',
          value: 81,
        },
        {
          name: 'Tuần 30',
          value: 84,
        },
        {
          name: 'Tuần 31',
          value: 87,
        },
        {
          name: 'Tuần 32',
          value: 90,
        },
        {
          name: 'Tuần 33',
          value: 93,
        },
        {
          name: 'Tuần 34',
          value: 96,
        },
        {
          name: 'Tuần 35',
          value: 99,
        },
        {
          name: 'Tuần 36',
          value: 102,
        },
        {
          name: 'Tuần 37',
          value: 105,
        },
        {
          name: 'Tuần 38',
          value: 108,
        },
        {
          name: 'Tuần 39',
          value: 111,
        },
        {
          name: 'Tuần 40',
          value: 114,
        },
        {
          name: 'Tuần 41',
          value: 117,
        },
        {
          name: 'Tuần 42',
          value: 120,
        },
        {
          name: 'Tuần 43',
          value: 123,
        },
        {
          name: 'Tuần 44',
          value: 126,
        },
        {
          name: 'Tuần 45',
          value: 129,
        },
        {
          name: 'Tuần 46',
          value: 132,
        },
        {
          name: 'Tuần 47',
          value: 135,
        },
        {
          name: 'Tuần 48',
          value: 138,
        },
        {
          name: 'Tuần 49',
          value: 141,
        },
        {
          name: 'Tuần 50',
          value: 144,
        },
        {
          name: 'Tuần 51',
          value: 147,
        },
        {
          name: 'Tuần 52',
          value: 132,
        },
      ],
    },
  ];
}
