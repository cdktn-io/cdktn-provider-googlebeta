# `googleNetworkServicesLbEdgeExtension` Submodule <a name="`googleNetworkServicesLbEdgeExtension` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesLbEdgeExtension <a name="GoogleNetworkServicesLbEdgeExtension" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension google_network_services_lb_edge_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.Initializer"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

new googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension(scope: Construct, id: string, config: GoogleNetworkServicesLbEdgeExtensionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig">GoogleNetworkServicesLbEdgeExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig">GoogleNetworkServicesLbEdgeExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.putExtensionChains">putExtensionChains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExtensionChains` <a name="putExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.putExtensionChains"></a>

```typescript
public putExtensionChains(value: IResolvable | GoogleNetworkServicesLbEdgeExtensionExtensionChains[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.putExtensionChains.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains">GoogleNetworkServicesLbEdgeExtensionExtensionChains</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkServicesLbEdgeExtensionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts">GoogleNetworkServicesLbEdgeExtensionTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesLbEdgeExtension resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.isConstruct"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.isTerraformElement"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.isTerraformResource"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.generateConfigForImport"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkServicesLbEdgeExtension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkServicesLbEdgeExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkServicesLbEdgeExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesLbEdgeExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.extensionChains">extensionChains</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList">GoogleNetworkServicesLbEdgeExtensionExtensionChainsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference">GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.extensionChainsInput">extensionChainsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains">GoogleNetworkServicesLbEdgeExtensionExtensionChains</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.forwardingRulesInput">forwardingRulesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts">GoogleNetworkServicesLbEdgeExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.forwardingRules">forwardingRules</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.extensionChains"></a>

```typescript
public readonly extensionChains: GoogleNetworkServicesLbEdgeExtensionExtensionChainsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList">GoogleNetworkServicesLbEdgeExtensionExtensionChainsList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference">GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `extensionChainsInput`<sup>Optional</sup> <a name="extensionChainsInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.extensionChainsInput"></a>

```typescript
public readonly extensionChainsInput: IResolvable | GoogleNetworkServicesLbEdgeExtensionExtensionChains[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains">GoogleNetworkServicesLbEdgeExtensionExtensionChains</a>[]

---

##### `forwardingRulesInput`<sup>Optional</sup> <a name="forwardingRulesInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.forwardingRulesInput"></a>

```typescript
public readonly forwardingRulesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.loadBalancingSchemeInput"></a>

```typescript
public readonly loadBalancingSchemeInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkServicesLbEdgeExtensionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts">GoogleNetworkServicesLbEdgeExtensionTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.forwardingRules"></a>

```typescript
public readonly forwardingRules: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtension.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesLbEdgeExtensionConfig <a name="GoogleNetworkServicesLbEdgeExtensionConfig" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.Initializer"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

const googleNetworkServicesLbEdgeExtensionConfig: googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.extensionChains">extensionChains</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains">GoogleNetworkServicesLbEdgeExtensionExtensionChains</a>[]</code> | extension_chains block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.forwardingRules">forwardingRules</a></code> | <code>string[]</code> | A list of references to the forwarding rules to which this service extension is attached. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>string</code> | All forwarding rules referenced by this extension must share the same load balancing scheme. Possible values: ["EXTERNAL_MANAGED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.location">location</a></code> | <code>string</code> | The location of the edge extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.name">name</a></code> | <code>string</code> | Name of the LbEdgeExtension resource in the following format: projects/{project}/locations/{location}/lbEdgeExtensions/{lbEdgeExtensions}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.description">description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#id GoogleNetworkServicesLbEdgeExtension#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Set of labels associated with the LbEdgeExtension resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#project GoogleNetworkServicesLbEdgeExtension#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts">GoogleNetworkServicesLbEdgeExtensionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `extensionChains`<sup>Required</sup> <a name="extensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.extensionChains"></a>

```typescript
public readonly extensionChains: IResolvable | GoogleNetworkServicesLbEdgeExtensionExtensionChains[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains">GoogleNetworkServicesLbEdgeExtensionExtensionChains</a>[]

extension_chains block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#extension_chains GoogleNetworkServicesLbEdgeExtension#extension_chains}

---

##### `forwardingRules`<sup>Required</sup> <a name="forwardingRules" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.forwardingRules"></a>

```typescript
public readonly forwardingRules: string[];
```

- *Type:* string[]

A list of references to the forwarding rules to which this service extension is attached.

At least one forwarding rule is required. Only one LbEdgeExtension resource can be associated with a forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#forwarding_rules GoogleNetworkServicesLbEdgeExtension#forwarding_rules}

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.loadBalancingScheme"></a>

```typescript
public readonly loadBalancingScheme: string;
```

- *Type:* string

All forwarding rules referenced by this extension must share the same load balancing scheme. Possible values: ["EXTERNAL_MANAGED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#load_balancing_scheme GoogleNetworkServicesLbEdgeExtension#load_balancing_scheme}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the edge extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#location GoogleNetworkServicesLbEdgeExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the LbEdgeExtension resource in the following format: projects/{project}/locations/{location}/lbEdgeExtensions/{lbEdgeExtensions}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#name GoogleNetworkServicesLbEdgeExtension#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#deletion_policy GoogleNetworkServicesLbEdgeExtension#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#description GoogleNetworkServicesLbEdgeExtension#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#id GoogleNetworkServicesLbEdgeExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Set of labels associated with the LbEdgeExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#labels GoogleNetworkServicesLbEdgeExtension#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#project GoogleNetworkServicesLbEdgeExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkServicesLbEdgeExtensionTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts">GoogleNetworkServicesLbEdgeExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#timeouts GoogleNetworkServicesLbEdgeExtension#timeouts}

---

### GoogleNetworkServicesLbEdgeExtensionExtensionChains <a name="GoogleNetworkServicesLbEdgeExtensionExtensionChains" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains.Initializer"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

const googleNetworkServicesLbEdgeExtensionExtensionChains: googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains.property.extensions">extensions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>[]</code> | extensions block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a></code> | match_condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains.property.name">name</a></code> | <code>string</code> | The name for this extension chain. |

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains.property.extensions"></a>

```typescript
public readonly extensions: IResolvable | GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>[]

extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#extensions GoogleNetworkServicesLbEdgeExtension#extensions}

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains.property.matchCondition"></a>

```typescript
public readonly matchCondition: GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a>

match_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#match_condition GoogleNetworkServicesLbEdgeExtension#match_condition}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for this extension chain.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#name GoogleNetworkServicesLbEdgeExtension#name}

---

### GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions <a name="GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions.Initializer"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

const googleNetworkServicesLbEdgeExtensionExtensionChainsExtensions: googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.name">name</a></code> | <code>string</code> | The name for this extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.service">service</a></code> | <code>string</code> | The reference to the service that runs the extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.failOpen">failOpen</a></code> | <code>boolean \| cdktn.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.forwardHeaders">forwardHeaders</a></code> | <code>string[]</code> | List of the HTTP headers to forward to the extension (from the client or backend). |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.supportedEvents">supportedEvents</a></code> | <code>string[]</code> | A set of events during request or response processing for which this extension is called. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name for this extension.

The name is logged as part of the HTTP request logs.
The name must conform with RFC-1034, is restricted to lower-cased letters, numbers and hyphens,
and can have a maximum length of 63 characters. Additionally, the first character must be a letter
and the last a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#name GoogleNetworkServicesLbEdgeExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

The reference to the service that runs the extension.

* To configure a callout extension, service must be a fully-qualified reference to a backend service.
* To configure a plugin extension, service must be a reference to a WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#service GoogleNetworkServicesLbEdgeExtension#service}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error.
Any subsequent extensions in the extension chain are also executed.
When set to FALSE: * If response headers have not been delivered to the downstream client,
a generic 500 error is returned to the client. The error response can be tailored by
configuring a custom error response in the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#fail_open GoogleNetworkServicesLbEdgeExtension#fail_open}

---

##### `forwardHeaders`<sup>Optional</sup> <a name="forwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.forwardHeaders"></a>

```typescript
public readonly forwardHeaders: string[];
```

- *Type:* string[]

List of the HTTP headers to forward to the extension (from the client or backend).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#forward_headers GoogleNetworkServicesLbEdgeExtension#forward_headers}

---

##### `supportedEvents`<sup>Optional</sup> <a name="supportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions.property.supportedEvents"></a>

```typescript
public readonly supportedEvents: string[];
```

- *Type:* string[]

A set of events during request or response processing for which this extension is called.

This field is required for the LbEdgeExtension resource and only supports the value 'REQUEST_HEADERS'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#supported_events GoogleNetworkServicesLbEdgeExtension#supported_events}

---

### GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition <a name="GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition.Initializer"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

const googleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition: googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition.property.celExpression">celExpression</a></code> | <code>string</code> | A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed. |

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition.property.celExpression"></a>

```typescript
public readonly celExpression: string;
```

- *Type:* string

A Common Expression Language (CEL) expression that is used to match requests for which the extension chain is executed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#cel_expression GoogleNetworkServicesLbEdgeExtension#cel_expression}

---

### GoogleNetworkServicesLbEdgeExtensionTimeouts <a name="GoogleNetworkServicesLbEdgeExtensionTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts.Initializer"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

const googleNetworkServicesLbEdgeExtensionTimeouts: googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#create GoogleNetworkServicesLbEdgeExtension#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#delete GoogleNetworkServicesLbEdgeExtension#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#update GoogleNetworkServicesLbEdgeExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#create GoogleNetworkServicesLbEdgeExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#delete GoogleNetworkServicesLbEdgeExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_network_services_lb_edge_extension#update GoogleNetworkServicesLbEdgeExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList <a name="GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

new googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>[]

---


### GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference <a name="GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

new googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders">resetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents">resetSupportedEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetFailOpen"></a>

```typescript
public resetFailOpen(): void
```

##### `resetForwardHeaders` <a name="resetForwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetForwardHeaders"></a>

```typescript
public resetForwardHeaders(): void
```

##### `resetSupportedEvents` <a name="resetSupportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.resetSupportedEvents"></a>

```typescript
public resetSupportedEvents(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput">forwardHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput">supportedEventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpen">failOpen</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders">forwardHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents">supportedEvents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpenInput"></a>

```typescript
public readonly failOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `forwardHeadersInput`<sup>Optional</sup> <a name="forwardHeadersInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeadersInput"></a>

```typescript
public readonly forwardHeadersInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `supportedEventsInput`<sup>Optional</sup> <a name="supportedEventsInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEventsInput"></a>

```typescript
public readonly supportedEventsInput: string[];
```

- *Type:* string[]

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.failOpen"></a>

```typescript
public readonly failOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `forwardHeaders`<sup>Required</sup> <a name="forwardHeaders" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.forwardHeaders"></a>

```typescript
public readonly forwardHeaders: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `supportedEvents`<sup>Required</sup> <a name="supportedEvents" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.supportedEvents"></a>

```typescript
public readonly supportedEvents: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>

---


### GoogleNetworkServicesLbEdgeExtensionExtensionChainsList <a name="GoogleNetworkServicesLbEdgeExtensionExtensionChainsList" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.Initializer"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

new googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.get"></a>

```typescript
public get(index: number): GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains">GoogleNetworkServicesLbEdgeExtensionExtensionChains</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbEdgeExtensionExtensionChains[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains">GoogleNetworkServicesLbEdgeExtensionExtensionChains</a>[]

---


### GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference <a name="GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

new googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput">celExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpression">celExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `celExpressionInput`<sup>Optional</sup> <a name="celExpressionInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpressionInput"></a>

```typescript
public readonly celExpressionInput: string;
```

- *Type:* string

---

##### `celExpression`<sup>Required</sup> <a name="celExpression" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.celExpression"></a>

```typescript
public readonly celExpression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a>

---


### GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference <a name="GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

new googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putExtensions">putExtensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putMatchCondition">putMatchCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtensions` <a name="putExtensions" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putExtensions"></a>

```typescript
public putExtensions(value: IResolvable | GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putExtensions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>[]

---

##### `putMatchCondition` <a name="putMatchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putMatchCondition"></a>

```typescript
public putMatchCondition(value: GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.putMatchCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.extensions">extensions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.matchCondition">matchCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.extensionsInput">extensionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.matchConditionInput">matchConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains">GoogleNetworkServicesLbEdgeExtensionExtensionChains</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `extensions`<sup>Required</sup> <a name="extensions" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.extensions"></a>

```typescript
public readonly extensions: GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList">GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensionsList</a>

---

##### `matchCondition`<sup>Required</sup> <a name="matchCondition" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.matchCondition"></a>

```typescript
public readonly matchCondition: GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference">GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchConditionOutputReference</a>

---

##### `extensionsInput`<sup>Optional</sup> <a name="extensionsInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.extensionsInput"></a>

```typescript
public readonly extensionsInput: IResolvable | GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions">GoogleNetworkServicesLbEdgeExtensionExtensionChainsExtensions</a>[]

---

##### `matchConditionInput`<sup>Optional</sup> <a name="matchConditionInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.matchConditionInput"></a>

```typescript
public readonly matchConditionInput: GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition">GoogleNetworkServicesLbEdgeExtensionExtensionChainsMatchCondition</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChainsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbEdgeExtensionExtensionChains;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionExtensionChains">GoogleNetworkServicesLbEdgeExtensionExtensionChains</a>

---


### GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference <a name="GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkServicesLbEdgeExtension } from '@cdktn/provider-google-beta'

new googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts">GoogleNetworkServicesLbEdgeExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkServicesLbEdgeExtensionTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkServicesLbEdgeExtension.GoogleNetworkServicesLbEdgeExtensionTimeouts">GoogleNetworkServicesLbEdgeExtensionTimeouts</a>

---



