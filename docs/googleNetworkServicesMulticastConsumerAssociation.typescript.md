# `googleNetworkServicesMulticastConsumerAssociation` Submodule <a name="`googleNetworkServicesMulticastConsumerAssociation` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesMulticastConsumerAssociation <a name="GoogleNetworkServicesMulticastConsumerAssociation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association google_network_services_multicast_consumer_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastConsumerAssociation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation(scope: Construct, id: string, config: GoogleNetworkServicesMulticastConsumerAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig">GoogleNetworkServicesMulticastConsumerAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig">GoogleNetworkServicesMulticastConsumerAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkServicesMulticastConsumerAssociationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesMulticastConsumerAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isConstruct"></a>

```typescript
import { googleNetworkServicesMulticastConsumerAssociation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformElement"></a>

```typescript
import { googleNetworkServicesMulticastConsumerAssociation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformResource"></a>

```typescript
import { googleNetworkServicesMulticastConsumerAssociation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport"></a>

```typescript
import { googleNetworkServicesMulticastConsumerAssociation } from '@cdktn/provider-google-beta'

googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkServicesMulticastConsumerAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesMulticastConsumerAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesMulticastConsumerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesMulticastConsumerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.placementPolicy">placementPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.state">state</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList">GoogleNetworkServicesMulticastConsumerAssociationStateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference">GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationIdInput">multicastConsumerAssociationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastDomainActivationInput">multicastDomainActivationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationId">multicastConsumerAssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastDomainActivation">multicastDomainActivation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `placementPolicy`<sup>Required</sup> <a name="placementPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.placementPolicy"></a>

```typescript
public readonly placementPolicy: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.state"></a>

```typescript
public readonly state: GoogleNetworkServicesMulticastConsumerAssociationStateList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList">GoogleNetworkServicesMulticastConsumerAssociationStateList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference">GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference</a>

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `multicastConsumerAssociationIdInput`<sup>Optional</sup> <a name="multicastConsumerAssociationIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationIdInput"></a>

```typescript
public readonly multicastConsumerAssociationIdInput: string;
```

- *Type:* string

---

##### `multicastDomainActivationInput`<sup>Optional</sup> <a name="multicastDomainActivationInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastDomainActivationInput"></a>

```typescript
public readonly multicastDomainActivationInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkServicesMulticastConsumerAssociationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `multicastConsumerAssociationId`<sup>Required</sup> <a name="multicastConsumerAssociationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastConsumerAssociationId"></a>

```typescript
public readonly multicastConsumerAssociationId: string;
```

- *Type:* string

---

##### `multicastDomainActivation`<sup>Required</sup> <a name="multicastDomainActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.multicastDomainActivation"></a>

```typescript
public readonly multicastDomainActivation: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesMulticastConsumerAssociationConfig <a name="GoogleNetworkServicesMulticastConsumerAssociationConfig" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastConsumerAssociation } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastConsumerAssociationConfig: googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.multicastConsumerAssociationId">multicastConsumerAssociationId</a></code> | <code>string</code> | A unique name for the multicast consumer association. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.multicastDomainActivation">multicastDomainActivation</a></code> | <code>string</code> | The resource name of the multicast domain activation that is in the same zone as this multicast consumer association. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.network">network</a></code> | <code>string</code> | The resource name of the multicast consumer VPC network. Use following format: 'projects/{project}/locations/global/networks/{network}'. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.description">description</a></code> | <code>string</code> | An optional text description of the multicast consumer association. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#id GoogleNetworkServicesMulticastConsumerAssociation#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Labels as key-value pairs. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#project GoogleNetworkServicesMulticastConsumerAssociation#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#location GoogleNetworkServicesMulticastConsumerAssociation#location}

---

##### `multicastConsumerAssociationId`<sup>Required</sup> <a name="multicastConsumerAssociationId" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.multicastConsumerAssociationId"></a>

```typescript
public readonly multicastConsumerAssociationId: string;
```

- *Type:* string

A unique name for the multicast consumer association.

The name is restricted to letters, numbers, and hyphen, with the first
character a letter, and the last a letter or a number. The name must not
exceed 48 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#multicast_consumer_association_id GoogleNetworkServicesMulticastConsumerAssociation#multicast_consumer_association_id}

---

##### `multicastDomainActivation`<sup>Required</sup> <a name="multicastDomainActivation" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.multicastDomainActivation"></a>

```typescript
public readonly multicastDomainActivation: string;
```

- *Type:* string

The resource name of the multicast domain activation that is in the same zone as this multicast consumer association.

Use the following format:
// 'projects/* /locations/* /multicastDomainActivations/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#multicast_domain_activation GoogleNetworkServicesMulticastConsumerAssociation#multicast_domain_activation}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The resource name of the multicast consumer VPC network. Use following format: 'projects/{project}/locations/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#network GoogleNetworkServicesMulticastConsumerAssociation#network}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#deletion_policy GoogleNetworkServicesMulticastConsumerAssociation#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional text description of the multicast consumer association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#description GoogleNetworkServicesMulticastConsumerAssociation#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#id GoogleNetworkServicesMulticastConsumerAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Labels as key-value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#labels GoogleNetworkServicesMulticastConsumerAssociation#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#project GoogleNetworkServicesMulticastConsumerAssociation#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesMulticastConsumerAssociationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#timeouts GoogleNetworkServicesMulticastConsumerAssociation#timeouts}

---

### GoogleNetworkServicesMulticastConsumerAssociationState <a name="GoogleNetworkServicesMulticastConsumerAssociationState" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationState.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastConsumerAssociation } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastConsumerAssociationState: googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationState = { ... }
```


### GoogleNetworkServicesMulticastConsumerAssociationTimeouts <a name="GoogleNetworkServicesMulticastConsumerAssociationTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastConsumerAssociation } from '@cdktn/provider-google-beta'

const googleNetworkServicesMulticastConsumerAssociationTimeouts: googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#create GoogleNetworkServicesMulticastConsumerAssociation#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#delete GoogleNetworkServicesMulticastConsumerAssociation#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#update GoogleNetworkServicesMulticastConsumerAssociation#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#create GoogleNetworkServicesMulticastConsumerAssociation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#delete GoogleNetworkServicesMulticastConsumerAssociation#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_network_services_multicast_consumer_association#update GoogleNetworkServicesMulticastConsumerAssociation#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesMulticastConsumerAssociationStateList <a name="GoogleNetworkServicesMulticastConsumerAssociationStateList" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastConsumerAssociation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference <a name="GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastConsumerAssociation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationState">GoogleNetworkServicesMulticastConsumerAssociationState</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationStateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesMulticastConsumerAssociationState;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationState">GoogleNetworkServicesMulticastConsumerAssociationState</a>

---


### GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference <a name="GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesMulticastConsumerAssociation } from '@cdktn/provider-google-beta'

new googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesMulticastConsumerAssociationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesMulticastConsumerAssociation.GoogleNetworkServicesMulticastConsumerAssociationTimeouts">GoogleNetworkServicesMulticastConsumerAssociationTimeouts</a>

---



