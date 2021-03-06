import { Component, Input } from '@angular/core';

@Component({
    selector: 'simple-element',
    templateUrl: 'simple.component.html',
    styleUrls: ['simple.component.css'],    
})
export class Simple {
    stars: Array<any> = [
        { name: "Sol", x: 0, y: 0, mag: 4.85, options: { color: '#FF851B', fillColor: '#FFDC00' } },
        { name: "Gl 447", x: 0, y: 2.9, mag: 13.50256408, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Luyten\'s Star", x: -3.2, y: 0.7, mag: 11.95192438, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Lacaille 8760", x: 2.8, y: -2.8, mag: 8.688775957, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-12°4523", x: 3.9, y: 1.7, mag: 11.93080683, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 674", x: 4.3, y: -0.5, mag: 11.0863535, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 832", x: 3.3, y: -3.6, mag: 10.20244681, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 682", x: 4.9, y: -0.6, mag: 12.43683257, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+15°2620", x: 1.6, y: 5.2, mag: 9.785622766, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Hip 33226", x: -5.3, y: 1.4, mag: 11.18222855, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Hip 103039", x: 3.9, y: -3.1, mag: 12.71214588, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-03°1123", x: -4.8, y: -1.9, mag: 9.184105973, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-21°1377", x: -3.6, y: -1.8, mag: 9.332614061, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 693", x: 5.1, y: -1.5, mag: 11.92865199, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 588", x: 5.2, y: 1.2, mag: 10.44325725, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-11°3759", x: 4.1, y: 4.2, mag: 12.37772159, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Delta Pavonis", x: 4.5, y: -3.3, mag: 4.630641309, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 784", x: 5.2, y: -3.4, mag: 9.00642103, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-07°4003", x: 4.8, y: 4, mag: 11.5740757, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+45°2505", x: 1.6, y: 3.7, mag: 10.95562057, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 408", x: -2.3, y: 6, mag: 10.91430944, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 625", x: 0.6, y: 4.5, mag: 11.02821769, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 829", x: 2.2, y: -2.7, mag: 11.15555933, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+15°4733", x: 0.3, y: -4.3, mag: 9.480879683, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+01°2447", x: -2.1, y: 5.3, mag: 10.34395388, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Beta Hydri", x: 3.3, y: -4.8, mag: 3.431955958, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+04°123", x: -2.1, y: -6.3, mag: 6.376172096, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-20°4123", x: 5.8, y: 4, mag: 8.629519842, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+11°2576", x: 2.2, y: 7.2, mag: 9.638344703, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 480.1", x: 3.7, y: 2.5, mag: 12.81838533, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+02°3312", x: 6.6, y: 2.6, mag: 8.092019464, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-03°2870", x: -2.5, y: 5.1, mag: 9.805880195, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-03°4233", x: 7, y: 1.2, mag: 9.920794756, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 257", x: -2.1, y: -2.4, mag: 11.97793873, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 793", x: -1.3, y: 2.1, mag: 11.05529395, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+18°3421", x: 5.5, y: 3.3, mag: 10.06987861, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 884", x: 2.8, y: -7.3, mag: 8.325991834, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 486", x: 1.2, y: 7.8, mag: 11.80787985, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "8 Beta Canum Venaticorum", x: -1.5, y: 8.1, mag: 4.656112552, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-21°1051", x: -5.3, y: -4.6, mag: 8.807970526, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "61 Virginis", x: 4.1, y: 5.9, mag: 5.086490061, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Zeta Tucanae", x: 3.3, y: -6.8, mag: 4.549391764, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+36°2219", x: -2.2, y: 8.3, mag: 10.06944403, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 203", x: -8.2, y: -2.1, mag: 12.78424437, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-05°1844", x: -6.9, y: -0.3, mag: 6.892355964, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 785", x: 7.4, y: -4.3, mag: 6.001724444, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-05°5715", x: 3.5, y: -6.2, mag: 10.65395274, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 357", x: -2.3, y: 3.4, mag: 11.15462087, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 433", x: 2.1, y: 4.2, mag: 10.04975709, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "GJ 2066", x: -6.4, y: 3, mag: 10.29170967, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "43 Beta Comae Berenices", x: 0.5, y: 9.1, mag: 4.451709668, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 190", x: -6.2, y: -4.7, mag: 10.45299861, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 3325", x: -6.3, y: -4.8, mag: 11.85430208, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 226", x: -5.6, y: 4, mag: 10.63532031, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+18°683", x: -9, y: -2.8, mag: 10.07980455, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 358", x: -0.3, y: 1.4, mag: 10.86296657, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+43°2796", x: 2.9, y: 4.8, mag: 10.58399702, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 3135", x: -1.8, y: -9.1, mag: 12.26914196, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 479", x: 4.9, y: 1.8, mag: 10.7455408, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+33°2777", x: 4.3, y: 6.3, mag: 8.160439235, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 680", x: 9.2, y: -1.5, mag: 10.19937817, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+05°3409", x: 8.2, y: 3.5, mag: 9.303688369, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Alpha Mensae", x: 2.4, y: -4.9, mag: 5.04806279, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+61°195", x: -5.7, y: -0.1, mag: 9.547805578, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+62°1325", x: -2, y: 8.2, mag: 6.467517851, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+52°857", x: -9.1, y: 0.7, mag: 8.568787698, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 436", x: -2.3, y: 9.9, mag: 10.62013949, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 453", x: 2.7, y: 5.7, mag: 6.939672749, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 487", x: -3.5, y: 7.9, mag: 10.85923027, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-01°2892", x: 5.2, y: 8.4, mag: 9.661883799, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Hip 117828", x: 4.7, y: -6.7, mag: 9.955637426, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+25°3173", x: 5.8, y: 6, mag: 9.581618885, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+00°4810", x: 3.8, y: -6.7, mag: 9.113410899, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Iota Persei", x: -8.5, y: -1.4, mag: 3.937017404, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 341", x: 1.7, y: -1.3, mag: 9.397058913, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+63°869", x: -6.4, y: 7.3, mag: 8.897741874, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 431", x: 2.9, y: 3.5, mag: 11.41910715, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 3412", x: -8.8, y: 4.3, mag: 10.92610123, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 413.1", x: 0.8, y: 5.8, mag: 10.29545107, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+03°3465", x: 9, y: 3.2, mag: 6.370804215, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 4333", x: -0.6, y: -7, mag: 11.57405805, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+10°1032", x: -10.2, y: -0.8, mag: 10.41703778, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+00°2989", x: 2.7, y: 9.5, mag: 8.326569591, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 660", x: 9.5, y: 3.9, mag: 11.88258588, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 145", x: -2, y: -8.7, mag: 11.30011896, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+36°2393", x: 0.6, y: 10.6, mag: 8.85232023, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 3459", x: -5.9, y: 0.1, mag: 11.5224767, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "GJ 1148", x: -3.7, y: 10.3, mag: 11.68707857, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-11°916", x: -8.1, y: -6.3, mag: 10.13675479, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "54 Piscium", x: -4.1, y: -7.4, mag: 5.621936251, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+38°3095", x: 4.2, y: 4.5, mag: 6.173864948, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+05°3993", x: 8.6, y: 0.2, mag: 8.991695043, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 79", x: -2.7, y: -10.7, mag: 8.675310348, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 370", x: 0.3, y: 1.6, mag: 7.403235849, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 70", x: -5.2, y: -9.3, mag: 10.67353154, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 4070", x: 5.3, y: 3.1, mag: 10.99586523, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+11°878", x: -10.8, y: -2.2, mag: 8.519944375, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 361", x: -6.3, y: 7.8, mag: 10.09389341, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 851", x: 2, y: -5.8, mag: 9.928054011, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 902", x: 5.3, y: -7.8, mag: 6.785493115, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 3804", x: 6.5, y: 7.8, mag: 11.57574065, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Hip 29052", x: -6.6, y: -4, mag: 11.58351184, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "GJ 1075", x: -0.6, y: -6.9, mag: 8.711597717, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 118", x: 1.7, y: -8.6, mag: 11.07534875, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+21°652", x: -10.9, y: -3.6, mag: 7.97183523, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+44°4548", x: -4.6, y: -3.2, mag: 9.627097017, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "VV Lyncis", x: -10.5, y: 4.5, mag: 10.28133696, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 362", x: -7, y: 7.3, mag: 10.90984501, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Hip 48659", x: -1.6, y: 4.1, mag: 11.74407604, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+22°2302", x: -3.9, y: 10.5, mag: 9.266423862, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+45°2247", x: 1.4, y: 10, mag: 8.789322567, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "24 Iota Pegasi", x: 1.4, y: -4.8, mag: 3.408626892, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Hip 69454", x: 8.1, y: 0.9, mag: 9.847605503, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 842", x: 7.3, y: -8.6, mag: 9.378107274, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+47°612", x: -8.7, y: -2.5, mag: 9.029586116, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 179", x: -10.9, y: -4.7, mag: 11.5627961, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 798", x: 9.3, y: -7.4, mag: 8.404111423, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 309", x: -3.7, y: 1.1, mag: 5.963037839, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+27°1348", x: -11.6, y: 3.6, mag: 10.3937651, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 381", x: -4, y: 8.1, mag: 10.17858227, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 671", x: 4, y: 6.9, mag: 10.91188886, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 180", x: -8.2, y: -6.9, mag: 10.43947418, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "55 Rho 1 Cancri", x: -9.5, y: 7.7, mag: 5.460014457, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-09°3070", x: -2.6, y: 7.8, mag: 9.687349143, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 435", x: 4.1, y: 3.6, mag: 7.283005653, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 806", x: 1.3, y: 0.2, mag: 10.28572135, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "GJ 1097", x: -9.5, y: 1.5, mag: 10.9359289, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-12°2449", x: -7.1, y: 2.8, mag: 5.471289292, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+41°328", x: -8.1, y: -4.2, mag: 4.440607878, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 737", x: 11, y: -4.9, mag: 8.94198023, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Hip 84051", x: 11.4, y: -1.7, mag: 9.552654912, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+06°2182", x: -6.8, y: 7.7, mag: 6.684559204, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+67°1014", x: -1.4, y: 7, mag: 5.894367034, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+08°4887", x: 2.4, y: -8.3, mag: 9.832420897, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 3708", x: 3.3, y: 8.5, mag: 11.14436703, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Hip 27887", x: -0.2, y: -6.5, mag: 6.629080598, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 428", x: 5, y: -0.1, mag: 6.948748876, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-09°3413", x: 1.9, y: 10, mag: 4.99594806, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-03°1110", x: -10.9, y: -4.4, mag: 7.083299489, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 707", x: 12.5, y: -2.6, mag: 7.807523871, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-21°5081", x: 12.6, y: -1.5, mag: 5.293017571, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 114.1", x: 0.1, y: -10.8, mag: 10.13688745, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 46", x: -0.2, y: -13.1, mag: 11.18319181, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+02°4076", x: 9.1, y: -3.2, mag: 6.871484005, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+27°4120", x: 2.4, y: -4.1, mag: 9.286067081, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+57°2735", x: -4.8, y: -0.7, mag: 9.450629599, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 3403", x: -1.1, y: -5.3, mag: 9.357455451, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 3452", x: -11, y: 6.2, mag: 10.70290727, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-18°4986", x: 12.8, y: -1, mag: 6.205766231, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+46°1889", x: -0.8, y: 12.4, mag: 9.617720539, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "GJ 1267", x: 7.7, y: -10.5, mag: 8.428055985, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 146", x: -1.7, y: -10.5, mag: 7.971249114, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+09°2636", x: 1.3, y: 12.7, mag: 9.063111895, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+63°229", x: -8.4, y: 0.4, mag: 7.76932351, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+31°3767", x: 5.1, y: 0.8, mag: 9.522409088, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 130.1", x: -10.5, y: 0.1, mag: 10.27465179, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+36°1970", x: -9.1, y: 9.9, mag: 9.532634434, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "25 Theta Ursae Majoris", x: -9.1, y: 9.6, mag: 2.520555777, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 868", x: 6.1, y: -11.9, mag: 7.161752498, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 469", x: 1.2, y: 12.8, mag: 11.39939892, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 853", x: 7.9, y: -10.6, mag: 4.720550199, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 4040", x: 3.4, y: 6.4, mag: 11.12881012, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 133", x: -8.2, y: 4.5, mag: 10.5106569, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "10 Tauri", x: -10.2, y: -9.1, mag: 3.593339751, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+62°780", x: -11.4, y: 3.9, mag: 8.337803823, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 386", x: -3.1, y: 8, mag: 10.2903586, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+27°2296", x: 2.5, y: 13.3, mag: 6.934038145, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 813", x: 4.9, y: -3.5, mag: 11.33374168, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Hip 19337", x: -12.8, y: -3.2, mag: 9.496911742, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 816", x: 8.6, y: -7.3, mag: 10.52779286, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-07°4156", x: 11.8, y: 7.4, mag: 9.781831618, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 739", x: 12.7, y: -5, mag: 10.43877261, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Wo 9773", x: 3.7, y: -8.5, mag: 11.28575751, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Hip 52596", x: 0.7, y: 5.8, mag: 10.51238521, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 104", x: -10.1, y: -8.3, mag: 9.934565112, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+50°2030", x: -1.1, y: 12.6, mag: 8.16818691, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "18 Scorpii", x: 12.2, y: 6.8, mag: 4.755447649, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-07°5871", x: 3.7, y: -11.5, mag: 9.119403251, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+39°2376", x: -6.8, y: 12.4, mag: 8.552312164, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 42", x: 0.4, y: -14.1, mag: 6.426597563, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 685", x: -0.2, y: 7.6, mag: 9.224761999, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-03°4380", x: 12.3, y: -0.2, mag: 8.060166288, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 512", x: 5.6, y: 12.2, mag: 10.56463857, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 3564", x: -8.7, y: 10.6, mag: 11.29371591, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+17°917", x: -14, y: -2.6, mag: 7.16803236, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+16°2404", x: 1.1, y: 14, mag: 7.18362814, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 3148", x: -3, y: -13.5, mag: 11.2304479, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Wo 9724", x: 10.4, y: -9.8, mag: 11.22803236, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-02°2198", x: -10.7, y: 2.1, mag: 9.090832052, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+30°2512", x: 3.5, y: 13.5, mag: 7.757735826, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 613", x: 12.1, y: -0.9, mag: 6.324917351, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 3438", x: -13.4, y: 5.3, mag: 9.530844246, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD-08°2582", x: -6.9, y: 6.1, mag: 8.699835092, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+04°4157", x: 10.7, y: -1.9, mag: 8.557075963, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "NN 3892", x: 9.5, y: 11, mag: 10.65393072, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+25°613", x: -13, y: -5.5, mag: 8.792253569, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 781.1", x: 12.6, y: -7.1, mag: 11.42813583, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 796", x: 11.3, y: -8.1, mag: 5.531467562, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Hip 52190", x: 1.5, y: 4.5, mag: 10.19464548, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 604", x: 13.2, y: 2.1, mag: 7.218284984, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 833", x: 9.9, y: -10.7, mag: 6.29774926, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+01°543", x: -10.2, y: -10.7, mag: 8.24262257, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 865", x: 8.1, y: -10.7, mag: 10.62458781, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "GJ 2128", x: 11.8, y: 6.2, mag: 10.61777966, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+02°1729", x: -11.7, y: 3, mag: 8.749107138, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Hip 79431", x: 13.7, y: 5.8, mag: 10.47458324, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 838.6", x: 9.5, y: -11.6, mag: 11.08166422, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 40", x: -0.6, y: -15.2, mag: 8.051459454, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Gl 258", x: -11.5, y: 6.8, mag: 11.03921645, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "BD+55°1519", x: -5.1, y: 13.5, mag: 8.864233343, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } },
        { name: "Mu Arae", x: 14.1, y: -3, mag: 4.219880005, options: { color: '#FFFFFF', fillColor: '#FFFFF0' } }];
}
