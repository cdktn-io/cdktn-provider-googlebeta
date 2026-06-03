# `googleComputeVpnTunnel` Submodule <a name="`googleComputeVpnTunnel` Submodule" id="@cdktn/provider-google-beta.googleComputeVpnTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeVpnTunnel <a name="GoogleComputeVpnTunnel" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel google_compute_vpn_tunnel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

new googleComputeVpnTunnel.GoogleComputeVpnTunnel(scope: Construct, id: string, config: GoogleComputeVpnTunnelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig">GoogleComputeVpnTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig">GoogleComputeVpnTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putCipherSuite">putCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putParams">putParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetCipherSuite">resetCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetIkeVersion">resetIkeVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLocalTrafficSelector">resetLocalTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGateway">resetPeerExternalGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGatewayInterface">resetPeerExternalGatewayInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerGcpGateway">resetPeerGcpGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerIp">resetPeerIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRemoteTrafficSelector">resetRemoteTrafficSelector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRouter">resetRouter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetSharedSecret">resetSharedSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetSharedSecretWo">resetSharedSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetSharedSecretWoVersion">resetSharedSecretWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTargetVpnGateway">resetTargetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGateway">resetVpnGateway</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGatewayInterface">resetVpnGatewayInterface</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCipherSuite` <a name="putCipherSuite" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putCipherSuite"></a>

```typescript
public putCipherSuite(value: GoogleComputeVpnTunnelCipherSuite): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putCipherSuite.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a>

---

##### `putParams` <a name="putParams" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putParams"></a>

```typescript
public putParams(value: GoogleComputeVpnTunnelParams): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParams">GoogleComputeVpnTunnelParams</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeVpnTunnelTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

---

##### `resetCipherSuite` <a name="resetCipherSuite" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetCipherSuite"></a>

```typescript
public resetCipherSuite(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIkeVersion` <a name="resetIkeVersion" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetIkeVersion"></a>

```typescript
public resetIkeVersion(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocalTrafficSelector` <a name="resetLocalTrafficSelector" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetLocalTrafficSelector"></a>

```typescript
public resetLocalTrafficSelector(): void
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetParams"></a>

```typescript
public resetParams(): void
```

##### `resetPeerExternalGateway` <a name="resetPeerExternalGateway" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGateway"></a>

```typescript
public resetPeerExternalGateway(): void
```

##### `resetPeerExternalGatewayInterface` <a name="resetPeerExternalGatewayInterface" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerExternalGatewayInterface"></a>

```typescript
public resetPeerExternalGatewayInterface(): void
```

##### `resetPeerGcpGateway` <a name="resetPeerGcpGateway" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerGcpGateway"></a>

```typescript
public resetPeerGcpGateway(): void
```

##### `resetPeerIp` <a name="resetPeerIp" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetPeerIp"></a>

```typescript
public resetPeerIp(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRemoteTrafficSelector` <a name="resetRemoteTrafficSelector" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRemoteTrafficSelector"></a>

```typescript
public resetRemoteTrafficSelector(): void
```

##### `resetRouter` <a name="resetRouter" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetRouter"></a>

```typescript
public resetRouter(): void
```

##### `resetSharedSecret` <a name="resetSharedSecret" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetSharedSecret"></a>

```typescript
public resetSharedSecret(): void
```

##### `resetSharedSecretWo` <a name="resetSharedSecretWo" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetSharedSecretWo"></a>

```typescript
public resetSharedSecretWo(): void
```

##### `resetSharedSecretWoVersion` <a name="resetSharedSecretWoVersion" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetSharedSecretWoVersion"></a>

```typescript
public resetSharedSecretWoVersion(): void
```

##### `resetTargetVpnGateway` <a name="resetTargetVpnGateway" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTargetVpnGateway"></a>

```typescript
public resetTargetVpnGateway(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpnGateway` <a name="resetVpnGateway" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGateway"></a>

```typescript
public resetVpnGateway(): void
```

##### `resetVpnGatewayInterface` <a name="resetVpnGatewayInterface" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.resetVpnGatewayInterface"></a>

```typescript
public resetVpnGatewayInterface(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleComputeVpnTunnel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isConstruct"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

googleComputeVpnTunnel.GoogleComputeVpnTunnel.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformElement"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformResource"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleComputeVpnTunnel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeVpnTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeVpnTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleComputeVpnTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cipherSuite">cipherSuite</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference">GoogleComputeVpnTunnelCipherSuiteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.detailedStatus">detailedStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelFingerprint">labelFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference">GoogleComputeVpnTunnelParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretHash">sharedSecretHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference">GoogleComputeVpnTunnelTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cipherSuiteInput">cipherSuiteInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersionInput">ikeVersionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelectorInput">localTrafficSelectorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.paramsInput">paramsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParams">GoogleComputeVpnTunnelParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInput">peerExternalGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterfaceInput">peerExternalGatewayInterfaceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGatewayInput">peerGcpGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIpInput">peerIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelectorInput">remoteTrafficSelectorInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.routerInput">routerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretInput">sharedSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretWoInput">sharedSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretWoVersionInput">sharedSecretWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGatewayInput">targetVpnGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInput">vpnGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterfaceInput">vpnGatewayInterfaceInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersion">ikeVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelector">localTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGateway">peerExternalGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGateway">peerGcpGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIp">peerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.router">router</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecret">sharedSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretWo">sharedSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretWoVersion">sharedSecretWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGateway">targetVpnGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGateway">vpnGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `cipherSuite`<sup>Required</sup> <a name="cipherSuite" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cipherSuite"></a>

```typescript
public readonly cipherSuite: GoogleComputeVpnTunnelCipherSuiteOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference">GoogleComputeVpnTunnelCipherSuiteOutputReference</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `detailedStatus`<sup>Required</sup> <a name="detailedStatus" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.detailedStatus"></a>

```typescript
public readonly detailedStatus: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `labelFingerprint`<sup>Required</sup> <a name="labelFingerprint" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelFingerprint"></a>

```typescript
public readonly labelFingerprint: string;
```

- *Type:* string

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.params"></a>

```typescript
public readonly params: GoogleComputeVpnTunnelParamsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference">GoogleComputeVpnTunnelParamsOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `sharedSecretHash`<sup>Required</sup> <a name="sharedSecretHash" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretHash"></a>

```typescript
public readonly sharedSecretHash: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeVpnTunnelTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference">GoogleComputeVpnTunnelTimeoutsOutputReference</a>

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `cipherSuiteInput`<sup>Optional</sup> <a name="cipherSuiteInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.cipherSuiteInput"></a>

```typescript
public readonly cipherSuiteInput: GoogleComputeVpnTunnelCipherSuite;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ikeVersionInput`<sup>Optional</sup> <a name="ikeVersionInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersionInput"></a>

```typescript
public readonly ikeVersionInput: number;
```

- *Type:* number

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `localTrafficSelectorInput`<sup>Optional</sup> <a name="localTrafficSelectorInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelectorInput"></a>

```typescript
public readonly localTrafficSelectorInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.paramsInput"></a>

```typescript
public readonly paramsInput: GoogleComputeVpnTunnelParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParams">GoogleComputeVpnTunnelParams</a>

---

##### `peerExternalGatewayInput`<sup>Optional</sup> <a name="peerExternalGatewayInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInput"></a>

```typescript
public readonly peerExternalGatewayInput: string;
```

- *Type:* string

---

##### `peerExternalGatewayInterfaceInput`<sup>Optional</sup> <a name="peerExternalGatewayInterfaceInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterfaceInput"></a>

```typescript
public readonly peerExternalGatewayInterfaceInput: number;
```

- *Type:* number

---

##### `peerGcpGatewayInput`<sup>Optional</sup> <a name="peerGcpGatewayInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGatewayInput"></a>

```typescript
public readonly peerGcpGatewayInput: string;
```

- *Type:* string

---

##### `peerIpInput`<sup>Optional</sup> <a name="peerIpInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIpInput"></a>

```typescript
public readonly peerIpInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `remoteTrafficSelectorInput`<sup>Optional</sup> <a name="remoteTrafficSelectorInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelectorInput"></a>

```typescript
public readonly remoteTrafficSelectorInput: string[];
```

- *Type:* string[]

---

##### `routerInput`<sup>Optional</sup> <a name="routerInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.routerInput"></a>

```typescript
public readonly routerInput: string;
```

- *Type:* string

---

##### `sharedSecretInput`<sup>Optional</sup> <a name="sharedSecretInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretInput"></a>

```typescript
public readonly sharedSecretInput: string;
```

- *Type:* string

---

##### `sharedSecretWoInput`<sup>Optional</sup> <a name="sharedSecretWoInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretWoInput"></a>

```typescript
public readonly sharedSecretWoInput: string;
```

- *Type:* string

---

##### `sharedSecretWoVersionInput`<sup>Optional</sup> <a name="sharedSecretWoVersionInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretWoVersionInput"></a>

```typescript
public readonly sharedSecretWoVersionInput: string;
```

- *Type:* string

---

##### `targetVpnGatewayInput`<sup>Optional</sup> <a name="targetVpnGatewayInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGatewayInput"></a>

```typescript
public readonly targetVpnGatewayInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeVpnTunnelTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

---

##### `vpnGatewayInput`<sup>Optional</sup> <a name="vpnGatewayInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInput"></a>

```typescript
public readonly vpnGatewayInput: string;
```

- *Type:* string

---

##### `vpnGatewayInterfaceInput`<sup>Optional</sup> <a name="vpnGatewayInterfaceInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterfaceInput"></a>

```typescript
public readonly vpnGatewayInterfaceInput: number;
```

- *Type:* number

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ikeVersion`<sup>Required</sup> <a name="ikeVersion" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.ikeVersion"></a>

```typescript
public readonly ikeVersion: number;
```

- *Type:* number

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `localTrafficSelector`<sup>Required</sup> <a name="localTrafficSelector" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.localTrafficSelector"></a>

```typescript
public readonly localTrafficSelector: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `peerExternalGateway`<sup>Required</sup> <a name="peerExternalGateway" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGateway"></a>

```typescript
public readonly peerExternalGateway: string;
```

- *Type:* string

---

##### `peerExternalGatewayInterface`<sup>Required</sup> <a name="peerExternalGatewayInterface" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerExternalGatewayInterface"></a>

```typescript
public readonly peerExternalGatewayInterface: number;
```

- *Type:* number

---

##### `peerGcpGateway`<sup>Required</sup> <a name="peerGcpGateway" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerGcpGateway"></a>

```typescript
public readonly peerGcpGateway: string;
```

- *Type:* string

---

##### `peerIp`<sup>Required</sup> <a name="peerIp" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.peerIp"></a>

```typescript
public readonly peerIp: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `remoteTrafficSelector`<sup>Required</sup> <a name="remoteTrafficSelector" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.remoteTrafficSelector"></a>

```typescript
public readonly remoteTrafficSelector: string[];
```

- *Type:* string[]

---

##### `router`<sup>Required</sup> <a name="router" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

---

##### `sharedSecret`<sup>Required</sup> <a name="sharedSecret" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecret"></a>

```typescript
public readonly sharedSecret: string;
```

- *Type:* string

---

##### `sharedSecretWo`<sup>Required</sup> <a name="sharedSecretWo" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretWo"></a>

```typescript
public readonly sharedSecretWo: string;
```

- *Type:* string

---

##### `sharedSecretWoVersion`<sup>Required</sup> <a name="sharedSecretWoVersion" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.sharedSecretWoVersion"></a>

```typescript
public readonly sharedSecretWoVersion: string;
```

- *Type:* string

---

##### `targetVpnGateway`<sup>Required</sup> <a name="targetVpnGateway" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.targetVpnGateway"></a>

```typescript
public readonly targetVpnGateway: string;
```

- *Type:* string

---

##### `vpnGateway`<sup>Required</sup> <a name="vpnGateway" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGateway"></a>

```typescript
public readonly vpnGateway: string;
```

- *Type:* string

---

##### `vpnGatewayInterface`<sup>Required</sup> <a name="vpnGatewayInterface" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.vpnGatewayInterface"></a>

```typescript
public readonly vpnGatewayInterface: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeVpnTunnelCipherSuite <a name="GoogleComputeVpnTunnelCipherSuite" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

const googleComputeVpnTunnelCipherSuite: googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.property.phase1">phase1</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a></code> | phase1 block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.property.phase2">phase2</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a></code> | phase2 block. |

---

##### `phase1`<sup>Optional</sup> <a name="phase1" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.property.phase1"></a>

```typescript
public readonly phase1: GoogleComputeVpnTunnelCipherSuitePhase1;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a>

phase1 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#phase1 GoogleComputeVpnTunnel#phase1}

---

##### `phase2`<sup>Optional</sup> <a name="phase2" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite.property.phase2"></a>

```typescript
public readonly phase2: GoogleComputeVpnTunnelCipherSuitePhase2;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a>

phase2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#phase2 GoogleComputeVpnTunnel#phase2}

---

### GoogleComputeVpnTunnelCipherSuitePhase1 <a name="GoogleComputeVpnTunnelCipherSuitePhase1" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

const googleComputeVpnTunnelCipherSuitePhase1: googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.dh">dh</a></code> | <code>string[]</code> | Diffie-Hellman groups. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.encryption">encryption</a></code> | <code>string[]</code> | Encryption algorithms. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.integrity">integrity</a></code> | <code>string[]</code> | Integrity algorithms. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.prf">prf</a></code> | <code>string[]</code> | Pseudo-random functions. |

---

##### `dh`<sup>Optional</sup> <a name="dh" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.dh"></a>

```typescript
public readonly dh: string[];
```

- *Type:* string[]

Diffie-Hellman groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#dh GoogleComputeVpnTunnel#dh}

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.encryption"></a>

```typescript
public readonly encryption: string[];
```

- *Type:* string[]

Encryption algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#encryption GoogleComputeVpnTunnel#encryption}

---

##### `integrity`<sup>Optional</sup> <a name="integrity" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.integrity"></a>

```typescript
public readonly integrity: string[];
```

- *Type:* string[]

Integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#integrity GoogleComputeVpnTunnel#integrity}

---

##### `prf`<sup>Optional</sup> <a name="prf" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1.property.prf"></a>

```typescript
public readonly prf: string[];
```

- *Type:* string[]

Pseudo-random functions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#prf GoogleComputeVpnTunnel#prf}

---

### GoogleComputeVpnTunnelCipherSuitePhase2 <a name="GoogleComputeVpnTunnelCipherSuitePhase2" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

const googleComputeVpnTunnelCipherSuitePhase2: googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.encryption">encryption</a></code> | <code>string[]</code> | Encryption algorithms. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.integrity">integrity</a></code> | <code>string[]</code> | Integrity algorithms. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.pfs">pfs</a></code> | <code>string[]</code> | Perfect forward secrecy groups. |

---

##### `encryption`<sup>Optional</sup> <a name="encryption" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.encryption"></a>

```typescript
public readonly encryption: string[];
```

- *Type:* string[]

Encryption algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#encryption GoogleComputeVpnTunnel#encryption}

---

##### `integrity`<sup>Optional</sup> <a name="integrity" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.integrity"></a>

```typescript
public readonly integrity: string[];
```

- *Type:* string[]

Integrity algorithms.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#integrity GoogleComputeVpnTunnel#integrity}

---

##### `pfs`<sup>Optional</sup> <a name="pfs" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2.property.pfs"></a>

```typescript
public readonly pfs: string[];
```

- *Type:* string[]

Perfect forward secrecy groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#pfs GoogleComputeVpnTunnel#pfs}

---

### GoogleComputeVpnTunnelConfig <a name="GoogleComputeVpnTunnelConfig" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

const googleComputeVpnTunnelConfig: googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.cipherSuite">cipherSuite</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a></code> | cipher_suite block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#id GoogleComputeVpnTunnel#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.ikeVersion">ikeVersion</a></code> | <code>number</code> | IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels to apply to this VpnTunnel. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.localTrafficSelector">localTrafficSelector</a></code> | <code>string[]</code> | Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParams">GoogleComputeVpnTunnelParams</a></code> | params block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGateway">peerExternalGateway</a></code> | <code>string</code> | URL of the peer side external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGatewayInterface">peerExternalGatewayInterface</a></code> | <code>number</code> | The interface ID of the external VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerGcpGateway">peerGcpGateway</a></code> | <code>string</code> | URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerIp">peerIp</a></code> | <code>string</code> | IP address of the peer VPN gateway. Only IPv4 is supported. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#project GoogleComputeVpnTunnel#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.region">region</a></code> | <code>string</code> | The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.remoteTrafficSelector">remoteTrafficSelector</a></code> | <code>string[]</code> | Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.router">router</a></code> | <code>string</code> | URL of router resource to be used for dynamic routing. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.sharedSecret">sharedSecret</a></code> | <code>string</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.sharedSecretWo">sharedSecretWo</a></code> | <code>string</code> | Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.sharedSecretWoVersion">sharedSecretWoVersion</a></code> | <code>string</code> | Triggers update of 'shared_secret_wo' write-only. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.targetVpnGateway">targetVpnGateway</a></code> | <code>string</code> | URL of the Target VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGateway">vpnGateway</a></code> | <code>string</code> | URL of the VPN gateway with which this VPN tunnel is associated. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGatewayInterface">vpnGatewayInterface</a></code> | <code>number</code> | The interface ID of the VPN gateway with which this VPN tunnel is associated. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63
characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character
must be a lowercase letter, and all following characters must
be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#name GoogleComputeVpnTunnel#name}

---

##### `cipherSuite`<sup>Optional</sup> <a name="cipherSuite" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.cipherSuite"></a>

```typescript
public readonly cipherSuite: GoogleComputeVpnTunnelCipherSuite;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a>

cipher_suite block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#cipher_suite GoogleComputeVpnTunnel#cipher_suite}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#deletion_policy GoogleComputeVpnTunnel#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#description GoogleComputeVpnTunnel#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#id GoogleComputeVpnTunnel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikeVersion`<sup>Optional</sup> <a name="ikeVersion" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.ikeVersion"></a>

```typescript
public readonly ikeVersion: number;
```

- *Type:* number

IKE protocol version to use when establishing the VPN tunnel with peer VPN gateway.

Acceptable IKE versions are 1 or 2. Default version is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#ike_version GoogleComputeVpnTunnel#ike_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels to apply to this VpnTunnel.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#labels GoogleComputeVpnTunnel#labels}

---

##### `localTrafficSelector`<sup>Optional</sup> <a name="localTrafficSelector" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.localTrafficSelector"></a>

```typescript
public readonly localTrafficSelector: string[];
```

- *Type:* string[]

Local traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#local_traffic_selector GoogleComputeVpnTunnel#local_traffic_selector}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.params"></a>

```typescript
public readonly params: GoogleComputeVpnTunnelParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParams">GoogleComputeVpnTunnelParams</a>

params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#params GoogleComputeVpnTunnel#params}

---

##### `peerExternalGateway`<sup>Optional</sup> <a name="peerExternalGateway" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGateway"></a>

```typescript
public readonly peerExternalGateway: string;
```

- *Type:* string

URL of the peer side external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#peer_external_gateway GoogleComputeVpnTunnel#peer_external_gateway}

---

##### `peerExternalGatewayInterface`<sup>Optional</sup> <a name="peerExternalGatewayInterface" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerExternalGatewayInterface"></a>

```typescript
public readonly peerExternalGatewayInterface: number;
```

- *Type:* number

The interface ID of the external VPN gateway to which this VPN tunnel is connected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#peer_external_gateway_interface GoogleComputeVpnTunnel#peer_external_gateway_interface}

---

##### `peerGcpGateway`<sup>Optional</sup> <a name="peerGcpGateway" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerGcpGateway"></a>

```typescript
public readonly peerGcpGateway: string;
```

- *Type:* string

URL of the peer side HA GCP VPN gateway to which this VPN tunnel is connected.

If provided, the VPN tunnel will automatically use the same vpn_gateway_interface
ID in the peer GCP VPN gateway.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#peer_gcp_gateway GoogleComputeVpnTunnel#peer_gcp_gateway}

---

##### `peerIp`<sup>Optional</sup> <a name="peerIp" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.peerIp"></a>

```typescript
public readonly peerIp: string;
```

- *Type:* string

IP address of the peer VPN gateway. Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#peer_ip GoogleComputeVpnTunnel#peer_ip}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#project GoogleComputeVpnTunnel#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region where the tunnel is located. If unset, is set to the region of 'target_vpn_gateway'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#region GoogleComputeVpnTunnel#region}

---

##### `remoteTrafficSelector`<sup>Optional</sup> <a name="remoteTrafficSelector" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.remoteTrafficSelector"></a>

```typescript
public readonly remoteTrafficSelector: string[];
```

- *Type:* string[]

Remote traffic selector to use when establishing the VPN tunnel with peer VPN gateway.

The value should be a CIDR formatted string,
for example '192.168.0.0/16'. The ranges should be disjoint.
Only IPv4 is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#remote_traffic_selector GoogleComputeVpnTunnel#remote_traffic_selector}

---

##### `router`<sup>Optional</sup> <a name="router" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.router"></a>

```typescript
public readonly router: string;
```

- *Type:* string

URL of router resource to be used for dynamic routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#router GoogleComputeVpnTunnel#router}

---

##### `sharedSecret`<sup>Optional</sup> <a name="sharedSecret" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.sharedSecret"></a>

```typescript
public readonly sharedSecret: string;
```

- *Type:* string

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#shared_secret GoogleComputeVpnTunnel#shared_secret}

---

##### `sharedSecretWo`<sup>Optional</sup> <a name="sharedSecretWo" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.sharedSecretWo"></a>

```typescript
public readonly sharedSecretWo: string;
```

- *Type:* string

Shared secret used to set the secure session between the Cloud VPN gateway and the peer VPN gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#shared_secret_wo GoogleComputeVpnTunnel#shared_secret_wo}

---

##### `sharedSecretWoVersion`<sup>Optional</sup> <a name="sharedSecretWoVersion" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.sharedSecretWoVersion"></a>

```typescript
public readonly sharedSecretWoVersion: string;
```

- *Type:* string

Triggers update of 'shared_secret_wo' write-only.

Increment this value when an update to 'shared_secret_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#shared_secret_wo_version GoogleComputeVpnTunnel#shared_secret_wo_version}

---

##### `targetVpnGateway`<sup>Optional</sup> <a name="targetVpnGateway" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.targetVpnGateway"></a>

```typescript
public readonly targetVpnGateway: string;
```

- *Type:* string

URL of the Target VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#target_vpn_gateway GoogleComputeVpnTunnel#target_vpn_gateway}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeVpnTunnelTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#timeouts GoogleComputeVpnTunnel#timeouts}

---

##### `vpnGateway`<sup>Optional</sup> <a name="vpnGateway" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGateway"></a>

```typescript
public readonly vpnGateway: string;
```

- *Type:* string

URL of the VPN gateway with which this VPN tunnel is associated.

This must be used if a High Availability VPN gateway resource is created.
This field must reference a 'google_compute_ha_vpn_gateway' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#vpn_gateway GoogleComputeVpnTunnel#vpn_gateway}

---

##### `vpnGatewayInterface`<sup>Optional</sup> <a name="vpnGatewayInterface" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelConfig.property.vpnGatewayInterface"></a>

```typescript
public readonly vpnGatewayInterface: number;
```

- *Type:* number

The interface ID of the VPN gateway with which this VPN tunnel is associated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#vpn_gateway_interface GoogleComputeVpnTunnel#vpn_gateway_interface}

---

### GoogleComputeVpnTunnelParams <a name="GoogleComputeVpnTunnelParams" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParams.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

const googleComputeVpnTunnelParams: googleComputeVpnTunnel.GoogleComputeVpnTunnelParams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParams.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | Resource manager tags to be bound to the Vpn Tunnel. |

---

##### `resourceManagerTags`<sup>Optional</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParams.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource manager tags to be bound to the Vpn Tunnel.

Tag keys and values have the
same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id},
and values are in the format tagValues/456.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#resource_manager_tags GoogleComputeVpnTunnel#resource_manager_tags}

---

### GoogleComputeVpnTunnelTimeouts <a name="GoogleComputeVpnTunnelTimeouts" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

const googleComputeVpnTunnelTimeouts: googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#create GoogleComputeVpnTunnel#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#delete GoogleComputeVpnTunnel#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#update GoogleComputeVpnTunnel#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#create GoogleComputeVpnTunnel#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#delete GoogleComputeVpnTunnel#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_compute_vpn_tunnel#update GoogleComputeVpnTunnel#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeVpnTunnelCipherSuiteOutputReference <a name="GoogleComputeVpnTunnelCipherSuiteOutputReference" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

new googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase1">putPhase1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase2">putPhase2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resetPhase1">resetPhase1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resetPhase2">resetPhase2</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPhase1` <a name="putPhase1" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase1"></a>

```typescript
public putPhase1(value: GoogleComputeVpnTunnelCipherSuitePhase1): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase1.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a>

---

##### `putPhase2` <a name="putPhase2" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase2"></a>

```typescript
public putPhase2(value: GoogleComputeVpnTunnelCipherSuitePhase2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.putPhase2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a>

---

##### `resetPhase1` <a name="resetPhase1" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resetPhase1"></a>

```typescript
public resetPhase1(): void
```

##### `resetPhase2` <a name="resetPhase2" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.resetPhase2"></a>

```typescript
public resetPhase2(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase1">phase1</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference">GoogleComputeVpnTunnelCipherSuitePhase1OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase2">phase2</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference">GoogleComputeVpnTunnelCipherSuitePhase2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase1Input">phase1Input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase2Input">phase2Input</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `phase1`<sup>Required</sup> <a name="phase1" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase1"></a>

```typescript
public readonly phase1: GoogleComputeVpnTunnelCipherSuitePhase1OutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference">GoogleComputeVpnTunnelCipherSuitePhase1OutputReference</a>

---

##### `phase2`<sup>Required</sup> <a name="phase2" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase2"></a>

```typescript
public readonly phase2: GoogleComputeVpnTunnelCipherSuitePhase2OutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference">GoogleComputeVpnTunnelCipherSuitePhase2OutputReference</a>

---

##### `phase1Input`<sup>Optional</sup> <a name="phase1Input" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase1Input"></a>

```typescript
public readonly phase1Input: GoogleComputeVpnTunnelCipherSuitePhase1;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a>

---

##### `phase2Input`<sup>Optional</sup> <a name="phase2Input" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.phase2Input"></a>

```typescript
public readonly phase2Input: GoogleComputeVpnTunnelCipherSuitePhase2;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuiteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeVpnTunnelCipherSuite;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuite">GoogleComputeVpnTunnelCipherSuite</a>

---


### GoogleComputeVpnTunnelCipherSuitePhase1OutputReference <a name="GoogleComputeVpnTunnelCipherSuitePhase1OutputReference" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

new googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetDh">resetDh</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetIntegrity">resetIntegrity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetPrf">resetPrf</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDh` <a name="resetDh" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetDh"></a>

```typescript
public resetDh(): void
```

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetEncryption"></a>

```typescript
public resetEncryption(): void
```

##### `resetIntegrity` <a name="resetIntegrity" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetIntegrity"></a>

```typescript
public resetIntegrity(): void
```

##### `resetPrf` <a name="resetPrf" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.resetPrf"></a>

```typescript
public resetPrf(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.dhInput">dhInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryptionInput">encryptionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrityInput">integrityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.prfInput">prfInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.dh">dh</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryption">encryption</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrity">integrity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.prf">prf</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dhInput`<sup>Optional</sup> <a name="dhInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.dhInput"></a>

```typescript
public readonly dhInput: string[];
```

- *Type:* string[]

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: string[];
```

- *Type:* string[]

---

##### `integrityInput`<sup>Optional</sup> <a name="integrityInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrityInput"></a>

```typescript
public readonly integrityInput: string[];
```

- *Type:* string[]

---

##### `prfInput`<sup>Optional</sup> <a name="prfInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.prfInput"></a>

```typescript
public readonly prfInput: string[];
```

- *Type:* string[]

---

##### `dh`<sup>Required</sup> <a name="dh" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.dh"></a>

```typescript
public readonly dh: string[];
```

- *Type:* string[]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.encryption"></a>

```typescript
public readonly encryption: string[];
```

- *Type:* string[]

---

##### `integrity`<sup>Required</sup> <a name="integrity" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.integrity"></a>

```typescript
public readonly integrity: string[];
```

- *Type:* string[]

---

##### `prf`<sup>Required</sup> <a name="prf" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.prf"></a>

```typescript
public readonly prf: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeVpnTunnelCipherSuitePhase1;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase1">GoogleComputeVpnTunnelCipherSuitePhase1</a>

---


### GoogleComputeVpnTunnelCipherSuitePhase2OutputReference <a name="GoogleComputeVpnTunnelCipherSuitePhase2OutputReference" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

new googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetEncryption">resetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetIntegrity">resetIntegrity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetPfs">resetPfs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryption` <a name="resetEncryption" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetEncryption"></a>

```typescript
public resetEncryption(): void
```

##### `resetIntegrity` <a name="resetIntegrity" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetIntegrity"></a>

```typescript
public resetIntegrity(): void
```

##### `resetPfs` <a name="resetPfs" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.resetPfs"></a>

```typescript
public resetPfs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryptionInput">encryptionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrityInput">integrityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfsInput">pfsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryption">encryption</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrity">integrity</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfs">pfs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryptionInput"></a>

```typescript
public readonly encryptionInput: string[];
```

- *Type:* string[]

---

##### `integrityInput`<sup>Optional</sup> <a name="integrityInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrityInput"></a>

```typescript
public readonly integrityInput: string[];
```

- *Type:* string[]

---

##### `pfsInput`<sup>Optional</sup> <a name="pfsInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfsInput"></a>

```typescript
public readonly pfsInput: string[];
```

- *Type:* string[]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.encryption"></a>

```typescript
public readonly encryption: string[];
```

- *Type:* string[]

---

##### `integrity`<sup>Required</sup> <a name="integrity" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.integrity"></a>

```typescript
public readonly integrity: string[];
```

- *Type:* string[]

---

##### `pfs`<sup>Required</sup> <a name="pfs" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.pfs"></a>

```typescript
public readonly pfs: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeVpnTunnelCipherSuitePhase2;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelCipherSuitePhase2">GoogleComputeVpnTunnelCipherSuitePhase2</a>

---


### GoogleComputeVpnTunnelParamsOutputReference <a name="GoogleComputeVpnTunnelParamsOutputReference" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

new googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.resetResourceManagerTags">resetResourceManagerTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceManagerTags` <a name="resetResourceManagerTags" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.resetResourceManagerTags"></a>

```typescript
public resetResourceManagerTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.property.resourceManagerTagsInput">resourceManagerTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParams">GoogleComputeVpnTunnelParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceManagerTagsInput`<sup>Optional</sup> <a name="resourceManagerTagsInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.property.resourceManagerTagsInput"></a>

```typescript
public readonly resourceManagerTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.property.resourceManagerTags"></a>

```typescript
public readonly resourceManagerTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeVpnTunnelParams;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelParams">GoogleComputeVpnTunnelParams</a>

---


### GoogleComputeVpnTunnelTimeoutsOutputReference <a name="GoogleComputeVpnTunnelTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeVpnTunnel } from '@cdktn/provider-google-beta'

new googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeVpnTunnelTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleComputeVpnTunnel.GoogleComputeVpnTunnelTimeouts">GoogleComputeVpnTunnelTimeouts</a>

---



