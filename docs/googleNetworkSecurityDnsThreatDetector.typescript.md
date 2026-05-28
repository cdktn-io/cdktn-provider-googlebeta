# `googleNetworkSecurityDnsThreatDetector` Submodule <a name="`googleNetworkSecurityDnsThreatDetector` Submodule" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkSecurityDnsThreatDetector <a name="GoogleNetworkSecurityDnsThreatDetector" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector google_network_security_dns_threat_detector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer"></a>

```typescript
import { googleNetworkSecurityDnsThreatDetector } from '@cdktn/provider-google-beta'

new googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector(scope: Construct, id: string, config: GoogleNetworkSecurityDnsThreatDetectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig">GoogleNetworkSecurityDnsThreatDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig">GoogleNetworkSecurityDnsThreatDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetExcludedNetworks">resetExcludedNetworks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetThreatDetectorProvider">resetThreatDetectorProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkSecurityDnsThreatDetectorTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetExcludedNetworks` <a name="resetExcludedNetworks" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetExcludedNetworks"></a>

```typescript
public resetExcludedNetworks(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetThreatDetectorProvider` <a name="resetThreatDetectorProvider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetThreatDetectorProvider"></a>

```typescript
public resetThreatDetectorProvider(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkSecurityDnsThreatDetector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isConstruct"></a>

```typescript
import { googleNetworkSecurityDnsThreatDetector } from '@cdktn/provider-google-beta'

googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformElement"></a>

```typescript
import { googleNetworkSecurityDnsThreatDetector } from '@cdktn/provider-google-beta'

googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformResource"></a>

```typescript
import { googleNetworkSecurityDnsThreatDetector } from '@cdktn/provider-google-beta'

googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport"></a>

```typescript
import { googleNetworkSecurityDnsThreatDetector } from '@cdktn/provider-google-beta'

googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkSecurityDnsThreatDetector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkSecurityDnsThreatDetector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkSecurityDnsThreatDetector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkSecurityDnsThreatDetector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference">GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.excludedNetworksInput">excludedNetworksInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.threatDetectorProviderInput">threatDetectorProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.excludedNetworks">excludedNetworks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.threatDetectorProvider">threatDetectorProvider</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference">GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `excludedNetworksInput`<sup>Optional</sup> <a name="excludedNetworksInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.excludedNetworksInput"></a>

```typescript
public readonly excludedNetworksInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `threatDetectorProviderInput`<sup>Optional</sup> <a name="threatDetectorProviderInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.threatDetectorProviderInput"></a>

```typescript
public readonly threatDetectorProviderInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkSecurityDnsThreatDetectorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `excludedNetworks`<sup>Required</sup> <a name="excludedNetworks" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.excludedNetworks"></a>

```typescript
public readonly excludedNetworks: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `threatDetectorProvider`<sup>Required</sup> <a name="threatDetectorProvider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.threatDetectorProvider"></a>

```typescript
public readonly threatDetectorProvider: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkSecurityDnsThreatDetectorConfig <a name="GoogleNetworkSecurityDnsThreatDetectorConfig" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.Initializer"></a>

```typescript
import { googleNetworkSecurityDnsThreatDetector } from '@cdktn/provider-google-beta'

const googleNetworkSecurityDnsThreatDetectorConfig: googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.name">name</a></code> | <code>string</code> | Name of the DnsThreatDetector resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.excludedNetworks">excludedNetworks</a></code> | <code>string[]</code> | List of networks that are excluded from detection. Format: projects/{project}/global/networks/{name}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#id GoogleNetworkSecurityDnsThreatDetector#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of label tags associated with the DNS Threat Detector resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.location">location</a></code> | <code>string</code> | The location of the DNS Threat Detector. The only supported value is 'global'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#project GoogleNetworkSecurityDnsThreatDetector#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.threatDetectorProvider">threatDetectorProvider</a></code> | <code>string</code> | DNS Threat Detection provider. The only supported value is 'INFOBLOX'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the DnsThreatDetector resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#name GoogleNetworkSecurityDnsThreatDetector#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#deletion_policy GoogleNetworkSecurityDnsThreatDetector#deletion_policy}

---

##### `excludedNetworks`<sup>Optional</sup> <a name="excludedNetworks" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.excludedNetworks"></a>

```typescript
public readonly excludedNetworks: string[];
```

- *Type:* string[]

List of networks that are excluded from detection. Format: projects/{project}/global/networks/{name}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#excluded_networks GoogleNetworkSecurityDnsThreatDetector#excluded_networks}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#id GoogleNetworkSecurityDnsThreatDetector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of label tags associated with the DNS Threat Detector resource.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.


**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#labels GoogleNetworkSecurityDnsThreatDetector#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the DNS Threat Detector. The only supported value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#location GoogleNetworkSecurityDnsThreatDetector#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#project GoogleNetworkSecurityDnsThreatDetector#project}.

---

##### `threatDetectorProvider`<sup>Optional</sup> <a name="threatDetectorProvider" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.threatDetectorProvider"></a>

```typescript
public readonly threatDetectorProvider: string;
```

- *Type:* string

DNS Threat Detection provider. The only supported value is 'INFOBLOX'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#threat_detector_provider GoogleNetworkSecurityDnsThreatDetector#threat_detector_provider}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkSecurityDnsThreatDetectorTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#timeouts GoogleNetworkSecurityDnsThreatDetector#timeouts}

---

### GoogleNetworkSecurityDnsThreatDetectorTimeouts <a name="GoogleNetworkSecurityDnsThreatDetectorTimeouts" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.Initializer"></a>

```typescript
import { googleNetworkSecurityDnsThreatDetector } from '@cdktn/provider-google-beta'

const googleNetworkSecurityDnsThreatDetectorTimeouts: googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#create GoogleNetworkSecurityDnsThreatDetector#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#delete GoogleNetworkSecurityDnsThreatDetector#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#update GoogleNetworkSecurityDnsThreatDetector#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#create GoogleNetworkSecurityDnsThreatDetector#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#delete GoogleNetworkSecurityDnsThreatDetector#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_security_dns_threat_detector#update GoogleNetworkSecurityDnsThreatDetector#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference <a name="GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkSecurityDnsThreatDetector } from '@cdktn/provider-google-beta'

new googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkSecurityDnsThreatDetectorTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkSecurityDnsThreatDetector.GoogleNetworkSecurityDnsThreatDetectorTimeouts">GoogleNetworkSecurityDnsThreatDetectorTimeouts</a>

---



