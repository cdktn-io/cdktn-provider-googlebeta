# `googleNetworkServicesMulticastGroupProducerActivation` Submodule <a name="`googleNetworkServicesMulticastGroupProducerActivation` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesMulticastGroupProducerActivation <a name="GoogleNetworkServicesMulticastGroupProducerActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation google_network_services_multicast_group_producer_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupProducerActivation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation(scope: Construct, id: string, config: GoogleNetworkServicesMulticastGroupProducerActivationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig">GoogleNetworkServicesMulticastGroupProducerActivationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig">GoogleNetworkServicesMulticastGroupProducerActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkServicesMulticastGroupProducerActivationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesMulticastGroupProducerActivation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isConstruct"></a>

```typescript
import { googleNetworkServicesMulticastGroupProducerActivation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformElement"></a>

```typescript
import { googleNetworkServicesMulticastGroupProducerActivation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformResource"></a>

```typescript
import { googleNetworkServicesMulticastGroupProducerActivation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport"></a>

```typescript
import { googleNetworkServicesMulticastGroupProducerActivation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkServicesMulticastGroupProducerActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesMulticastGroupProducerActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesMulticastGroupProducerActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesMulticastGroupProducerActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.state">state</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList">GoogleNetworkServicesMulticastGroupProducerActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference">GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationIdInput">multicastGroupProducerActivationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivationInput">multicastGroupRangeActivationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociationInput">multicastProducerAssociationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationId">multicastGroupProducerActivationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivation">multicastGroupRangeActivation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociation">multicastProducerAssociation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.state"></a>

```typescript
public readonly state: GoogleNetworkServicesMulticastGroupProducerActivationStateList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList">GoogleNetworkServicesMulticastGroupProducerActivationStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference">GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `multicastGroupProducerActivationIdInput`<sup>Optional</sup> <a name="multicastGroupProducerActivationIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationIdInput"></a>

```typescript
public readonly multicastGroupProducerActivationIdInput: string;
```

- *Type:* string

---

##### `multicastGroupRangeActivationInput`<sup>Optional</sup> <a name="multicastGroupRangeActivationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivationInput"></a>

```typescript
public readonly multicastGroupRangeActivationInput: string;
```

- *Type:* string

---

##### `multicastProducerAssociationInput`<sup>Optional</sup> <a name="multicastProducerAssociationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociationInput"></a>

```typescript
public readonly multicastProducerAssociationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkServicesMulticastGroupProducerActivationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `multicastGroupProducerActivationId`<sup>Required</sup> <a name="multicastGroupProducerActivationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupProducerActivationId"></a>

```typescript
public readonly multicastGroupProducerActivationId: string;
```

- *Type:* string

---

##### `multicastGroupRangeActivation`<sup>Required</sup> <a name="multicastGroupRangeActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastGroupRangeActivation"></a>

```typescript
public readonly multicastGroupRangeActivation: string;
```

- *Type:* string

---

##### `multicastProducerAssociation`<sup>Required</sup> <a name="multicastProducerAssociation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.multicastProducerAssociation"></a>

```typescript
public readonly multicastProducerAssociation: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesMulticastGroupProducerActivationConfig <a name="GoogleNetworkServicesMulticastGroupProducerActivationConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupProducerActivation } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastGroupProducerActivationConfig: googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupProducerActivationId">multicastGroupProducerActivationId</a></code> | <code>string</code> | A unique name for the multicast group producer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupRangeActivation">multicastGroupRangeActivation</a></code> | <code>string</code> | The resource name of the multicast group range activationcreated by the admin in the same zone as this multicast group producer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.multicastProducerAssociation">multicastProducerAssociation</a></code> | <code>string</code> | The resource name of the multicast producer association that is in the same zone as this multicast group producer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.description">description</a></code> | <code>string</code> | An optional text description of the multicast group producer activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#id GoogleNetworkServicesMulticastGroupProducerActivation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#project GoogleNetworkServicesMulticastGroupProducerActivation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#location GoogleNetworkServicesMulticastGroupProducerActivation#location}

---

##### `multicastGroupProducerActivationId`<sup>Required</sup> <a name="multicastGroupProducerActivationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupProducerActivationId"></a>

```typescript
public readonly multicastGroupProducerActivationId: string;
```

- *Type:* string

A unique name for the multicast group producer activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#multicast_group_producer_activation_id GoogleNetworkServicesMulticastGroupProducerActivation#multicast_group_producer_activation_id}

---

##### `multicastGroupRangeActivation`<sup>Required</sup> <a name="multicastGroupRangeActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.multicastGroupRangeActivation"></a>

```typescript
public readonly multicastGroupRangeActivation: string;
```

- *Type:* string

The resource name of the multicast group range activationcreated by the admin in the same zone as this multicast group producer activation.

Use the
following format:
// 'projects/* /locations/* /multicastGroupRangeActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#multicast_group_range_activation GoogleNetworkServicesMulticastGroupProducerActivation#multicast_group_range_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastProducerAssociation`<sup>Required</sup> <a name="multicastProducerAssociation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.multicastProducerAssociation"></a>

```typescript
public readonly multicastProducerAssociation: string;
```

- *Type:* string

The resource name of the multicast producer association that is in the same zone as this multicast group producer activation.

Use the following format:
'projects/* /locations/* /multicastProducerAssociations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#multicast_producer_association GoogleNetworkServicesMulticastGroupProducerActivation#multicast_producer_association}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#deletion_policy GoogleNetworkServicesMulticastGroupProducerActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional text description of the multicast group producer activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#description GoogleNetworkServicesMulticastGroupProducerActivation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#id GoogleNetworkServicesMulticastGroupProducerActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#labels GoogleNetworkServicesMulticastGroupProducerActivation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#project GoogleNetworkServicesMulticastGroupProducerActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesMulticastGroupProducerActivationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#timeouts GoogleNetworkServicesMulticastGroupProducerActivation#timeouts}

---

### GoogleNetworkServicesMulticastGroupProducerActivationState <a name="GoogleNetworkServicesMulticastGroupProducerActivationState" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationState.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupProducerActivation } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastGroupProducerActivationState: googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationState = { ... }
```


### GoogleNetworkServicesMulticastGroupProducerActivationTimeouts <a name="GoogleNetworkServicesMulticastGroupProducerActivationTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupProducerActivation } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastGroupProducerActivationTimeouts: googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#create GoogleNetworkServicesMulticastGroupProducerActivation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#delete GoogleNetworkServicesMulticastGroupProducerActivation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#update GoogleNetworkServicesMulticastGroupProducerActivation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#create GoogleNetworkServicesMulticastGroupProducerActivation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#delete GoogleNetworkServicesMulticastGroupProducerActivation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_group_producer_activation#update GoogleNetworkServicesMulticastGroupProducerActivation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesMulticastGroupProducerActivationStateList <a name="GoogleNetworkServicesMulticastGroupProducerActivationStateList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupProducerActivation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference <a name="GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupProducerActivation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationState">GoogleNetworkServicesMulticastGroupProducerActivationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesMulticastGroupProducerActivationState;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationState">GoogleNetworkServicesMulticastGroupProducerActivationState</a>

---


### GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference <a name="GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupProducerActivation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesMulticastGroupProducerActivationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupProducerActivation.GoogleNetworkServicesMulticastGroupProducerActivationTimeouts">GoogleNetworkServicesMulticastGroupProducerActivationTimeouts</a>

---



