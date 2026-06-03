# `googleNetworkServicesMulticastGroupRangeActivation` Submodule <a name="`googleNetworkServicesMulticastGroupRangeActivation` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesMulticastGroupRangeActivation <a name="GoogleNetworkServicesMulticastGroupRangeActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation google_network_services_multicast_group_range_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRangeActivation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation(scope: Construct, id: string, config: GoogleNetworkServicesMulticastGroupRangeActivationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig">GoogleNetworkServicesMulticastGroupRangeActivationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig">GoogleNetworkServicesMulticastGroupRangeActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.putLogConfig"></a>

```typescript
public putLogConfig(value: GoogleNetworkServicesMulticastGroupRangeActivationLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfig">GoogleNetworkServicesMulticastGroupRangeActivationLogConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkServicesMulticastGroupRangeActivationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts">GoogleNetworkServicesMulticastGroupRangeActivationTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesMulticastGroupRangeActivation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.isConstruct"></a>

```typescript
import { googleNetworkServicesMulticastGroupRangeActivation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.isTerraformElement"></a>

```typescript
import { googleNetworkServicesMulticastGroupRangeActivation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.isTerraformResource"></a>

```typescript
import { googleNetworkServicesMulticastGroupRangeActivation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.generateConfigForImport"></a>

```typescript
import { googleNetworkServicesMulticastGroupRangeActivation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkServicesMulticastGroupRangeActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesMulticastGroupRangeActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesMulticastGroupRangeActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesMulticastGroupRangeActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.ipCidrRange">ipCidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference">GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.multicastGroupConsumerActivations">multicastGroupConsumerActivations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.state">state</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList">GoogleNetworkServicesMulticastGroupRangeActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference">GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfig">GoogleNetworkServicesMulticastGroupRangeActivationLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.multicastDomainActivationInput">multicastDomainActivationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeActivationIdInput">multicastGroupRangeActivationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeInput">multicastGroupRangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts">GoogleNetworkServicesMulticastGroupRangeActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.multicastDomainActivation">multicastDomainActivation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.multicastGroupRange">multicastGroupRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeActivationId">multicastGroupRangeActivationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `ipCidrRange`<sup>Required</sup> <a name="ipCidrRange" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.ipCidrRange"></a>

```typescript
public readonly ipCidrRange: string;
```

- *Type:* string

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.logConfig"></a>

```typescript
public readonly logConfig: GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference">GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference</a>

---

##### `multicastGroupConsumerActivations`<sup>Required</sup> <a name="multicastGroupConsumerActivations" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.multicastGroupConsumerActivations"></a>

```typescript
public readonly multicastGroupConsumerActivations: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.state"></a>

```typescript
public readonly state: GoogleNetworkServicesMulticastGroupRangeActivationStateList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList">GoogleNetworkServicesMulticastGroupRangeActivationStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference">GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: GoogleNetworkServicesMulticastGroupRangeActivationLogConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfig">GoogleNetworkServicesMulticastGroupRangeActivationLogConfig</a>

---

##### `multicastDomainActivationInput`<sup>Optional</sup> <a name="multicastDomainActivationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.multicastDomainActivationInput"></a>

```typescript
public readonly multicastDomainActivationInput: string;
```

- *Type:* string

---

##### `multicastGroupRangeActivationIdInput`<sup>Optional</sup> <a name="multicastGroupRangeActivationIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeActivationIdInput"></a>

```typescript
public readonly multicastGroupRangeActivationIdInput: string;
```

- *Type:* string

---

##### `multicastGroupRangeInput`<sup>Optional</sup> <a name="multicastGroupRangeInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeInput"></a>

```typescript
public readonly multicastGroupRangeInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkServicesMulticastGroupRangeActivationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts">GoogleNetworkServicesMulticastGroupRangeActivationTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `multicastDomainActivation`<sup>Required</sup> <a name="multicastDomainActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.multicastDomainActivation"></a>

```typescript
public readonly multicastDomainActivation: string;
```

- *Type:* string

---

##### `multicastGroupRange`<sup>Required</sup> <a name="multicastGroupRange" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.multicastGroupRange"></a>

```typescript
public readonly multicastGroupRange: string;
```

- *Type:* string

---

##### `multicastGroupRangeActivationId`<sup>Required</sup> <a name="multicastGroupRangeActivationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.multicastGroupRangeActivationId"></a>

```typescript
public readonly multicastGroupRangeActivationId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesMulticastGroupRangeActivationConfig <a name="GoogleNetworkServicesMulticastGroupRangeActivationConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRangeActivation } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastGroupRangeActivationConfig: googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.multicastDomainActivation">multicastDomainActivation</a></code> | <code>string</code> | The resource name of a multicast domain activation that is in the same zone as this multicast group. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.multicastGroupRange">multicastGroupRange</a></code> | <code>string</code> | The resource name of the global multicast group range for the group. Use the following format: 'projects/* /locations/global/multicastGroupRanges/*'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.multicastGroupRangeActivationId">multicastGroupRangeActivationId</a></code> | <code>string</code> | A unique name for the multicast group range activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.description">description</a></code> | <code>string</code> | An optional text description of the multicast group range activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#id GoogleNetworkServicesMulticastGroupRangeActivation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfig">GoogleNetworkServicesMulticastGroupRangeActivationLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#project GoogleNetworkServicesMulticastGroupRangeActivation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts">GoogleNetworkServicesMulticastGroupRangeActivationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#location GoogleNetworkServicesMulticastGroupRangeActivation#location}

---

##### `multicastDomainActivation`<sup>Required</sup> <a name="multicastDomainActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.multicastDomainActivation"></a>

```typescript
public readonly multicastDomainActivation: string;
```

- *Type:* string

The resource name of a multicast domain activation that is in the same zone as this multicast group.

Use the following format:
'projects/* /locations/* /multicastDomainActivations/*'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#multicast_domain_activation GoogleNetworkServicesMulticastGroupRangeActivation#multicast_domain_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastGroupRange`<sup>Required</sup> <a name="multicastGroupRange" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.multicastGroupRange"></a>

```typescript
public readonly multicastGroupRange: string;
```

- *Type:* string

The resource name of the global multicast group range for the group. Use the following format: 'projects/* /locations/global/multicastGroupRanges/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#multicast_group_range GoogleNetworkServicesMulticastGroupRangeActivation#multicast_group_range}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastGroupRangeActivationId`<sup>Required</sup> <a name="multicastGroupRangeActivationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.multicastGroupRangeActivationId"></a>

```typescript
public readonly multicastGroupRangeActivationId: string;
```

- *Type:* string

A unique name for the multicast group range activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#multicast_group_range_activation_id GoogleNetworkServicesMulticastGroupRangeActivation#multicast_group_range_activation_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#deletion_policy GoogleNetworkServicesMulticastGroupRangeActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional text description of the multicast group range activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#description GoogleNetworkServicesMulticastGroupRangeActivation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#id GoogleNetworkServicesMulticastGroupRangeActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#labels GoogleNetworkServicesMulticastGroupRangeActivation#labels}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.logConfig"></a>

```typescript
public readonly logConfig: GoogleNetworkServicesMulticastGroupRangeActivationLogConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfig">GoogleNetworkServicesMulticastGroupRangeActivationLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#log_config GoogleNetworkServicesMulticastGroupRangeActivation#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#project GoogleNetworkServicesMulticastGroupRangeActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesMulticastGroupRangeActivationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts">GoogleNetworkServicesMulticastGroupRangeActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#timeouts GoogleNetworkServicesMulticastGroupRangeActivation#timeouts}

---

### GoogleNetworkServicesMulticastGroupRangeActivationLogConfig <a name="GoogleNetworkServicesMulticastGroupRangeActivationLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfig.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRangeActivation } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastGroupRangeActivationLogConfig: googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable logging or not. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable logging or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#enabled GoogleNetworkServicesMulticastGroupRangeActivation#enabled}

---

### GoogleNetworkServicesMulticastGroupRangeActivationState <a name="GoogleNetworkServicesMulticastGroupRangeActivationState" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationState.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRangeActivation } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastGroupRangeActivationState: googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationState = { ... }
```


### GoogleNetworkServicesMulticastGroupRangeActivationTimeouts <a name="GoogleNetworkServicesMulticastGroupRangeActivationTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRangeActivation } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastGroupRangeActivationTimeouts: googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#create GoogleNetworkServicesMulticastGroupRangeActivation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#delete GoogleNetworkServicesMulticastGroupRangeActivation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#update GoogleNetworkServicesMulticastGroupRangeActivation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#create GoogleNetworkServicesMulticastGroupRangeActivation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#delete GoogleNetworkServicesMulticastGroupRangeActivation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_multicast_group_range_activation#update GoogleNetworkServicesMulticastGroupRangeActivation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference <a name="GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRangeActivation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfig">GoogleNetworkServicesMulticastGroupRangeActivationLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesMulticastGroupRangeActivationLogConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationLogConfig">GoogleNetworkServicesMulticastGroupRangeActivationLogConfig</a>

---


### GoogleNetworkServicesMulticastGroupRangeActivationStateList <a name="GoogleNetworkServicesMulticastGroupRangeActivationStateList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRangeActivation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference <a name="GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRangeActivation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationState">GoogleNetworkServicesMulticastGroupRangeActivationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesMulticastGroupRangeActivationState;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationState">GoogleNetworkServicesMulticastGroupRangeActivationState</a>

---


### GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference <a name="GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastGroupRangeActivation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts">GoogleNetworkServicesMulticastGroupRangeActivationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesMulticastGroupRangeActivationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastGroupRangeActivation.GoogleNetworkServicesMulticastGroupRangeActivationTimeouts">GoogleNetworkServicesMulticastGroupRangeActivationTimeouts</a>

---



