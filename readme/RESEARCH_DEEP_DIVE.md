# 📡 Research Deep Dive — IEEE MTT-S Non-Contact Microwave Radar

### 🔬 Project Title
**2.45 GHz ISM-Band Non-Contact Microwave Doppler Radar for Human Respiration & Vital Monitoring**

### 🏢 Organization & Fellowship
**IEEE Microwave Theory and Technology Society (MTT-S) — Region 10**

---

## 🎯 Research Abstract & Problem Statement

Traditional vital monitoring systems (ECG leads, chest straps, nasal cannulas) require direct physical contact, which causes discomfort in neonatal intensive care units, burn recovery patients, and long-term sleep apnea monitoring.

This research focuses on designing an **RF non-contact vital sign monitoring system** using **2.45 GHz continuous-wave (CW) / Doppler radar** capable of capturing sub-millimeter chest displacement induced by cardiopulmonary motion.

```
                  ┌────────────────────────┐
                  │ 2.45 GHz ISM Oscillator│
                  └───────────┬────────────┘
                              │ Tx (Local Oscillator)
                              ▼
┌──────────────────┐    ┌───────────┐    ┌─────────────────┐
│ Target (Human    │◄───┤ Microstrip│    │ Power Divider / │
│ Chest Wall)      ├───►│ Patch Ant.│◄───┤ Directional Cplr│
└──────────────────┘    └─────┬─────┘    └────────┬────────┘
                              │ Rx (Phase Modulated)
                              ▼                   │ LO Ref
                        ┌───────────┐             │
                        │ Quadrature│◄────────────┘
                        │ Mixer I/Q │
                        └─────┬─────┘
                              │ Demodulated Baseband
                              ▼
                        ┌───────────┐
                        │ DSP Filter│ ──► [ Respiration Rate: 0.1 - 0.5 Hz ]
                        │ & FFT Peak│ ──► [ Heartbeat Rate: 0.8 - 2.0 Hz ]
                        └───────────┘
```

---

## 📐 Electromagnetic Simulation & Antenna Design

### 1. Microstrip Patch Antenna Design in CST Studio Suite
- **Substrate**: Low-loss Rogers RO4350B ($\epsilon_r = 3.66$, $\tan\delta = 0.0037$) / FR4 substrate comparative optimization.
- **Center Operating Frequency ($f_0$)**: $2.45\text{ GHz}$ (Industrial, Scientific, and Medical unlicensed band).
- **Key Electromagnetic Parameters**:
  - Return Loss ($S_{11}$): $< -18\text{ dB}$ at resonance.
  - Directivity & Gain: $\approx 6.8\text{ dBi}$ directional main beam pointing towards the patient chest cavity.
  - Bandwidth: $> 80\text{ MHz}$ ($VSWR \le 1.5$).

```
        W_p (Patch Width)
   ┌───────────────────────────┐
   │                           │
   │      Microstrip Patch     │  L_p (Patch Length)
   │                           │
   └───┬───────────────────┬───┘
       │ Feedline (50 Ohm) │
       │                   │
```

---

## 🎛️ Doppler Baseband Demodulation & DSP Pipeline

### Theoretical Formulation
The backscattered electromagnetic wave experiences a phase shift proportional to the chest displacement $x(t)$:

$$\Delta\theta(t) = \frac{4\pi x(t)}{\lambda}$$

Where:
- $\lambda \approx 12.24\text{ cm}$ at $2.45\text{ GHz}$.
- $x(t) = x_{resp}(t) + x_{cardio}(t)$ with chest motion amplitude typically in the range $0.5\text{ mm} - 12\text{ mm}$.

### Demodulation and Harmonic Processing
1. **I/Q Orthogonal Demodulation**: Eliminates detection null points that occur at multiples of $\lambda/4$.
2. **Bandpass Filtering**: 
   - Respiration Band: $0.1\text{ Hz} - 0.5\text{ Hz}$ (6 to 30 breaths per minute).
   - Heartbeat Band: $0.8\text{ Hz} - 2.0\text{ Hz}$ (48 to 120 beats per minute).
3. **Harmonic Cancellation & FFT Peak Extraction**: Differentiates large-amplitude respiratory harmonics from subtle cardiac signatures.

---

## 🛠️ Simulation & Experimental Toolchain

- **Electromagnetic Modeling**: CST Studio Suite, ANSYS HFSS
- **Circuit Analysis**: LTSpice, Keysight ADS
- **Signal Processing**: MATLAB, Python (NumPy, SciPy, Matplotlib)
- **Hardware Prototyping**: RF Transceiver front-ends, Low-noise instrumentation amplifiers (INA)
