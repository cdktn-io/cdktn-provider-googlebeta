# `googleNetworkServicesMulticastDomainActivation` Submodule <a name="`googleNetworkServicesMulticastDomainActivation` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesMulticastDomainActivation <a name="GoogleNetworkServicesMulticastDomainActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation google_network_services_multicast_domain_activation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastDomainActivation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation(scope: Construct, id: string, config: GoogleNetworkServicesMulticastDomainActivationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig">GoogleNetworkServicesMulticastDomainActivationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig">GoogleNetworkServicesMulticastDomainActivationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTrafficSpec">putTrafficSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDisablePlacementPolicy">resetDisablePlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetTrafficSpec">resetTrafficSpec</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkServicesMulticastDomainActivationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a>

---

##### `putTrafficSpec` <a name="putTrafficSpec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTrafficSpec"></a>

```typescript
public putTrafficSpec(value: GoogleNetworkServicesMulticastDomainActivationTrafficSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.putTrafficSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisablePlacementPolicy` <a name="resetDisablePlacementPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetDisablePlacementPolicy"></a>

```typescript
public resetDisablePlacementPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrafficSpec` <a name="resetTrafficSpec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.resetTrafficSpec"></a>

```typescript
public resetTrafficSpec(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isConstruct"></a>

```typescript
import { googleNetworkServicesMulticastDomainActivation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformElement"></a>

```typescript
import { googleNetworkServicesMulticastDomainActivation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformResource"></a>

```typescript
import { googleNetworkServicesMulticastDomainActivation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport"></a>

```typescript
import { googleNetworkServicesMulticastDomainActivation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkServicesMulticastDomainActivation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesMulticastDomainActivation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesMulticastDomainActivation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesMulticastDomainActivation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.adminNetwork">adminNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.state">state</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList">GoogleNetworkServicesMulticastDomainActivationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference">GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.trafficSpec">trafficSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference">GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.disablePlacementPolicyInput">disablePlacementPolicyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainActivationIdInput">multicastDomainActivationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainInput">multicastDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.trafficSpecInput">trafficSpecInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.disablePlacementPolicy">disablePlacementPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomain">multicastDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainActivationId">multicastDomainActivationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `adminNetwork`<sup>Required</sup> <a name="adminNetwork" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.adminNetwork"></a>

```typescript
public readonly adminNetwork: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.state"></a>

```typescript
public readonly state: GoogleNetworkServicesMulticastDomainActivationStateList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList">GoogleNetworkServicesMulticastDomainActivationStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference">GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference</a>

---

##### `trafficSpec`<sup>Required</sup> <a name="trafficSpec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.trafficSpec"></a>

```typescript
public readonly trafficSpec: GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference">GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disablePlacementPolicyInput`<sup>Optional</sup> <a name="disablePlacementPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.disablePlacementPolicyInput"></a>

```typescript
public readonly disablePlacementPolicyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `multicastDomainActivationIdInput`<sup>Optional</sup> <a name="multicastDomainActivationIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainActivationIdInput"></a>

```typescript
public readonly multicastDomainActivationIdInput: string;
```

- *Type:* string

---

##### `multicastDomainInput`<sup>Optional</sup> <a name="multicastDomainInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainInput"></a>

```typescript
public readonly multicastDomainInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkServicesMulticastDomainActivationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a>

---

##### `trafficSpecInput`<sup>Optional</sup> <a name="trafficSpecInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.trafficSpecInput"></a>

```typescript
public readonly trafficSpecInput: GoogleNetworkServicesMulticastDomainActivationTrafficSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disablePlacementPolicy`<sup>Required</sup> <a name="disablePlacementPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.disablePlacementPolicy"></a>

```typescript
public readonly disablePlacementPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `multicastDomain`<sup>Required</sup> <a name="multicastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomain"></a>

```typescript
public readonly multicastDomain: string;
```

- *Type:* string

---

##### `multicastDomainActivationId`<sup>Required</sup> <a name="multicastDomainActivationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.multicastDomainActivationId"></a>

```typescript
public readonly multicastDomainActivationId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesMulticastDomainActivationConfig <a name="GoogleNetworkServicesMulticastDomainActivationConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastDomainActivation } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastDomainActivationConfig: googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.multicastDomain">multicastDomain</a></code> | <code>string</code> | The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.multicastDomainActivationId">multicastDomainActivationId</a></code> | <code>string</code> | A unique name for the multicast domain activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.description">description</a></code> | <code>string</code> | An optional text description of the multicast domain activation. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.disablePlacementPolicy">disablePlacementPolicy</a></code> | <code>boolean \| cdktn.IResolvable</code> | Option to allow disabling placement policy for multicast infrastructure. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#id GoogleNetworkServicesMulticastDomainActivation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#project GoogleNetworkServicesMulticastDomainActivation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.trafficSpec">trafficSpec</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a></code> | traffic_spec block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#location GoogleNetworkServicesMulticastDomainActivation#location}

---

##### `multicastDomain`<sup>Required</sup> <a name="multicastDomain" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.multicastDomain"></a>

```typescript
public readonly multicastDomain: string;
```

- *Type:* string

The resource name of the multicast domain to activate. Use the following format: 'projects/* /locations/global/multicastDomains/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#multicast_domain GoogleNetworkServicesMulticastDomainActivation#multicast_domain}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `multicastDomainActivationId`<sup>Required</sup> <a name="multicastDomainActivationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.multicastDomainActivationId"></a>

```typescript
public readonly multicastDomainActivationId: string;
```

- *Type:* string

A unique name for the multicast domain activation.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#multicast_domain_activation_id GoogleNetworkServicesMulticastDomainActivation#multicast_domain_activation_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#deletion_policy GoogleNetworkServicesMulticastDomainActivation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional text description of the multicast domain activation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#description GoogleNetworkServicesMulticastDomainActivation#description}

---

##### `disablePlacementPolicy`<sup>Optional</sup> <a name="disablePlacementPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.disablePlacementPolicy"></a>

```typescript
public readonly disablePlacementPolicy: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Option to allow disabling placement policy for multicast infrastructure.

Only applicable if the activation is for a domain associating with a
multicast domain group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#disable_placement_policy GoogleNetworkServicesMulticastDomainActivation#disable_placement_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#id GoogleNetworkServicesMulticastDomainActivation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#labels GoogleNetworkServicesMulticastDomainActivation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#project GoogleNetworkServicesMulticastDomainActivation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesMulticastDomainActivationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#timeouts GoogleNetworkServicesMulticastDomainActivation#timeouts}

---

##### `trafficSpec`<sup>Optional</sup> <a name="trafficSpec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationConfig.property.trafficSpec"></a>

```typescript
public readonly trafficSpec: GoogleNetworkServicesMulticastDomainActivationTrafficSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a>

traffic_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#traffic_spec GoogleNetworkServicesMulticastDomainActivation#traffic_spec}

---

### GoogleNetworkServicesMulticastDomainActivationState <a name="GoogleNetworkServicesMulticastDomainActivationState" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationState.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastDomainActivation } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastDomainActivationState: googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationState = { ... }
```


### GoogleNetworkServicesMulticastDomainActivationTimeouts <a name="GoogleNetworkServicesMulticastDomainActivationTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastDomainActivation } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastDomainActivationTimeouts: googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#create GoogleNetworkServicesMulticastDomainActivation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#delete GoogleNetworkServicesMulticastDomainActivation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#update GoogleNetworkServicesMulticastDomainActivation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#create GoogleNetworkServicesMulticastDomainActivation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#delete GoogleNetworkServicesMulticastDomainActivation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#update GoogleNetworkServicesMulticastDomainActivation#update}.

---

### GoogleNetworkServicesMulticastDomainActivationTrafficSpec <a name="GoogleNetworkServicesMulticastDomainActivationTrafficSpec" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastDomainActivation } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastDomainActivationTrafficSpec: googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.aggrEgressPps">aggrEgressPps</a></code> | <code>string</code> | Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.aggrIngressPps">aggrIngressPps</a></code> | <code>string</code> | Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.avgPacketSize">avgPacketSize</a></code> | <code>number</code> | Average packet size (Default to 512 bytes). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupIngressPps">maxPerGroupIngressPps</a></code> | <code>string</code> | Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupSubscribers">maxPerGroupSubscribers</a></code> | <code>string</code> | Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps). |

---

##### `aggrEgressPps`<sup>Optional</sup> <a name="aggrEgressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.aggrEgressPps"></a>

```typescript
public readonly aggrEgressPps: string;
```

- *Type:* string

Aggregated egress Packet-Per-Second for all multicast groups in the domain in this zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#aggr_egress_pps GoogleNetworkServicesMulticastDomainActivation#aggr_egress_pps}

---

##### `aggrIngressPps`<sup>Optional</sup> <a name="aggrIngressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.aggrIngressPps"></a>

```typescript
public readonly aggrIngressPps: string;
```

- *Type:* string

Aggregated ingress Packet-Per-Second for all multicast groups in the domain in this zone. Default to (aggregated_egress_pps / max_per_group_subscribers) * 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#aggr_ingress_pps GoogleNetworkServicesMulticastDomainActivation#aggr_ingress_pps}

---

##### `avgPacketSize`<sup>Optional</sup> <a name="avgPacketSize" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.avgPacketSize"></a>

```typescript
public readonly avgPacketSize: number;
```

- *Type:* number

Average packet size (Default to 512 bytes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#avg_packet_size GoogleNetworkServicesMulticastDomainActivation#avg_packet_size}

---

##### `maxPerGroupIngressPps`<sup>Optional</sup> <a name="maxPerGroupIngressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupIngressPps"></a>

```typescript
public readonly maxPerGroupIngressPps: string;
```

- *Type:* string

Maximum ingress Packet-Per-Second for a single multicast group in this zone. Default to aggregated_ingress_pps / 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#max_per_group_ingress_pps GoogleNetworkServicesMulticastDomainActivation#max_per_group_ingress_pps}

---

##### `maxPerGroupSubscribers`<sup>Optional</sup> <a name="maxPerGroupSubscribers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec.property.maxPerGroupSubscribers"></a>

```typescript
public readonly maxPerGroupSubscribers: string;
```

- *Type:* string

Maximum number of subscribers for a single multicast group in this zone. Default to max(50, aggregated_egress_pps / aggregated_ingress_pps).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_domain_activation#max_per_group_subscribers GoogleNetworkServicesMulticastDomainActivation#max_per_group_subscribers}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesMulticastDomainActivationStateList <a name="GoogleNetworkServicesMulticastDomainActivationStateList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastDomainActivation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesMulticastDomainActivationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleNetworkServicesMulticastDomainActivationStateOutputReference <a name="GoogleNetworkServicesMulticastDomainActivationStateOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastDomainActivation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationState">GoogleNetworkServicesMulticastDomainActivationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesMulticastDomainActivationState;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationState">GoogleNetworkServicesMulticastDomainActivationState</a>

---


### GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference <a name="GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastDomainActivation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesMulticastDomainActivationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTimeouts">GoogleNetworkServicesMulticastDomainActivationTimeouts</a>

---


### GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference <a name="GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastDomainActivation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrEgressPps">resetAggrEgressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrIngressPps">resetAggrIngressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAvgPacketSize">resetAvgPacketSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupIngressPps">resetMaxPerGroupIngressPps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupSubscribers">resetMaxPerGroupSubscribers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggrEgressPps` <a name="resetAggrEgressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrEgressPps"></a>

```typescript
public resetAggrEgressPps(): void
```

##### `resetAggrIngressPps` <a name="resetAggrIngressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAggrIngressPps"></a>

```typescript
public resetAggrIngressPps(): void
```

##### `resetAvgPacketSize` <a name="resetAvgPacketSize" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetAvgPacketSize"></a>

```typescript
public resetAvgPacketSize(): void
```

##### `resetMaxPerGroupIngressPps` <a name="resetMaxPerGroupIngressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupIngressPps"></a>

```typescript
public resetMaxPerGroupIngressPps(): void
```

##### `resetMaxPerGroupSubscribers` <a name="resetMaxPerGroupSubscribers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.resetMaxPerGroupSubscribers"></a>

```typescript
public resetMaxPerGroupSubscribers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPpsInput">aggrEgressPpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPpsInput">aggrIngressPpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSizeInput">avgPacketSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPpsInput">maxPerGroupIngressPpsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribersInput">maxPerGroupSubscribersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPps">aggrEgressPps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPps">aggrIngressPps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSize">avgPacketSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPps">maxPerGroupIngressPps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribers">maxPerGroupSubscribers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggrEgressPpsInput`<sup>Optional</sup> <a name="aggrEgressPpsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPpsInput"></a>

```typescript
public readonly aggrEgressPpsInput: string;
```

- *Type:* string

---

##### `aggrIngressPpsInput`<sup>Optional</sup> <a name="aggrIngressPpsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPpsInput"></a>

```typescript
public readonly aggrIngressPpsInput: string;
```

- *Type:* string

---

##### `avgPacketSizeInput`<sup>Optional</sup> <a name="avgPacketSizeInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSizeInput"></a>

```typescript
public readonly avgPacketSizeInput: number;
```

- *Type:* number

---

##### `maxPerGroupIngressPpsInput`<sup>Optional</sup> <a name="maxPerGroupIngressPpsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPpsInput"></a>

```typescript
public readonly maxPerGroupIngressPpsInput: string;
```

- *Type:* string

---

##### `maxPerGroupSubscribersInput`<sup>Optional</sup> <a name="maxPerGroupSubscribersInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribersInput"></a>

```typescript
public readonly maxPerGroupSubscribersInput: string;
```

- *Type:* string

---

##### `aggrEgressPps`<sup>Required</sup> <a name="aggrEgressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrEgressPps"></a>

```typescript
public readonly aggrEgressPps: string;
```

- *Type:* string

---

##### `aggrIngressPps`<sup>Required</sup> <a name="aggrIngressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.aggrIngressPps"></a>

```typescript
public readonly aggrIngressPps: string;
```

- *Type:* string

---

##### `avgPacketSize`<sup>Required</sup> <a name="avgPacketSize" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.avgPacketSize"></a>

```typescript
public readonly avgPacketSize: number;
```

- *Type:* number

---

##### `maxPerGroupIngressPps`<sup>Required</sup> <a name="maxPerGroupIngressPps" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupIngressPps"></a>

```typescript
public readonly maxPerGroupIngressPps: string;
```

- *Type:* string

---

##### `maxPerGroupSubscribers`<sup>Required</sup> <a name="maxPerGroupSubscribers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.maxPerGroupSubscribers"></a>

```typescript
public readonly maxPerGroupSubscribers: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesMulticastDomainActivationTrafficSpec;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastDomainActivation.GoogleNetworkServicesMulticastDomainActivationTrafficSpec">GoogleNetworkServicesMulticastDomainActivationTrafficSpec</a>

---



