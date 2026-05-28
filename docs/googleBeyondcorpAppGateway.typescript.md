# `googleBeyondcorpAppGateway` Submodule <a name="`googleBeyondcorpAppGateway` Submodule" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBeyondcorpAppGateway <a name="GoogleBeyondcorpAppGateway" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway google_beyondcorp_app_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.Initializer"></a>

```typescript
import { googleBeyondcorpAppGateway } from '@cdktn/provider-google-beta'

new googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway(scope: Construct, id: string, config: GoogleBeyondcorpAppGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig">GoogleBeyondcorpAppGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig">GoogleBeyondcorpAppGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetHostType">resetHostType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleBeyondcorpAppGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts">GoogleBeyondcorpAppGatewayTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetHostType` <a name="resetHostType" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetHostType"></a>

```typescript
public resetHostType(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBeyondcorpAppGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.isConstruct"></a>

```typescript
import { googleBeyondcorpAppGateway } from '@cdktn/provider-google-beta'

googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.isTerraformElement"></a>

```typescript
import { googleBeyondcorpAppGateway } from '@cdktn/provider-google-beta'

googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.isTerraformResource"></a>

```typescript
import { googleBeyondcorpAppGateway } from '@cdktn/provider-google-beta'

googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.generateConfigForImport"></a>

```typescript
import { googleBeyondcorpAppGateway } from '@cdktn/provider-google-beta'

googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleBeyondcorpAppGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBeyondcorpAppGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBeyondcorpAppGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBeyondcorpAppGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.allocatedConnections">allocatedConnections</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList">GoogleBeyondcorpAppGatewayAllocatedConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference">GoogleBeyondcorpAppGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.hostTypeInput">hostTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts">GoogleBeyondcorpAppGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.hostType">hostType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `allocatedConnections`<sup>Required</sup> <a name="allocatedConnections" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.allocatedConnections"></a>

```typescript
public readonly allocatedConnections: GoogleBeyondcorpAppGatewayAllocatedConnectionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList">GoogleBeyondcorpAppGatewayAllocatedConnectionsList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBeyondcorpAppGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference">GoogleBeyondcorpAppGatewayTimeoutsOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `hostTypeInput`<sup>Optional</sup> <a name="hostTypeInput" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.hostTypeInput"></a>

```typescript
public readonly hostTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleBeyondcorpAppGatewayTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts">GoogleBeyondcorpAppGatewayTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `hostType`<sup>Required</sup> <a name="hostType" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.hostType"></a>

```typescript
public readonly hostType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBeyondcorpAppGatewayAllocatedConnections <a name="GoogleBeyondcorpAppGatewayAllocatedConnections" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnections.Initializer"></a>

```typescript
import { googleBeyondcorpAppGateway } from '@cdktn/provider-google-beta'

const googleBeyondcorpAppGatewayAllocatedConnections: googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnections = { ... }
```


### GoogleBeyondcorpAppGatewayConfig <a name="GoogleBeyondcorpAppGatewayConfig" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.Initializer"></a>

```typescript
import { googleBeyondcorpAppGateway } from '@cdktn/provider-google-beta'

const googleBeyondcorpAppGatewayConfig: googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.name">name</a></code> | <code>string</code> | ID of the AppGateway. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.displayName">displayName</a></code> | <code>string</code> | An arbitrary user-provided name for the AppGateway. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.hostType">hostType</a></code> | <code>string</code> | The type of hosting used by the AppGateway. Default value: "HOST_TYPE_UNSPECIFIED" Possible values: ["HOST_TYPE_UNSPECIFIED", "GCP_REGIONAL_MIG"]. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#id GoogleBeyondcorpAppGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Resource labels to represent user provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#project GoogleBeyondcorpAppGateway#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.region">region</a></code> | <code>string</code> | The region of the AppGateway. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts">GoogleBeyondcorpAppGatewayTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.type">type</a></code> | <code>string</code> | The type of network connectivity used by the AppGateway. Default value: "TYPE_UNSPECIFIED" Possible values: ["TYPE_UNSPECIFIED", "TCP_PROXY"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

ID of the AppGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#name GoogleBeyondcorpAppGateway#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#deletion_policy GoogleBeyondcorpAppGateway#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

An arbitrary user-provided name for the AppGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#display_name GoogleBeyondcorpAppGateway#display_name}

---

##### `hostType`<sup>Optional</sup> <a name="hostType" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.hostType"></a>

```typescript
public readonly hostType: string;
```

- *Type:* string

The type of hosting used by the AppGateway. Default value: "HOST_TYPE_UNSPECIFIED" Possible values: ["HOST_TYPE_UNSPECIFIED", "GCP_REGIONAL_MIG"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#host_type GoogleBeyondcorpAppGateway#host_type}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#id GoogleBeyondcorpAppGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Resource labels to represent user provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#labels GoogleBeyondcorpAppGateway#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#project GoogleBeyondcorpAppGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the AppGateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#region GoogleBeyondcorpAppGateway#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleBeyondcorpAppGatewayTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts">GoogleBeyondcorpAppGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#timeouts GoogleBeyondcorpAppGateway#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of network connectivity used by the AppGateway. Default value: "TYPE_UNSPECIFIED" Possible values: ["TYPE_UNSPECIFIED", "TCP_PROXY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#type GoogleBeyondcorpAppGateway#type}

---

### GoogleBeyondcorpAppGatewayTimeouts <a name="GoogleBeyondcorpAppGatewayTimeouts" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts.Initializer"></a>

```typescript
import { googleBeyondcorpAppGateway } from '@cdktn/provider-google-beta'

const googleBeyondcorpAppGatewayTimeouts: googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#create GoogleBeyondcorpAppGateway#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#delete GoogleBeyondcorpAppGateway#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#update GoogleBeyondcorpAppGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#create GoogleBeyondcorpAppGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#delete GoogleBeyondcorpAppGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_beyondcorp_app_gateway#update GoogleBeyondcorpAppGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBeyondcorpAppGatewayAllocatedConnectionsList <a name="GoogleBeyondcorpAppGatewayAllocatedConnectionsList" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.Initializer"></a>

```typescript
import { googleBeyondcorpAppGateway } from '@cdktn/provider-google-beta'

new googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.get"></a>

```typescript
public get(index: number): GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference <a name="GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer"></a>

```typescript
import { googleBeyondcorpAppGateway } from '@cdktn/provider-google-beta'

new googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.ingressPort">ingressPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.pscUri">pscUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnections">GoogleBeyondcorpAppGatewayAllocatedConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ingressPort`<sup>Required</sup> <a name="ingressPort" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.ingressPort"></a>

```typescript
public readonly ingressPort: number;
```

- *Type:* number

---

##### `pscUri`<sup>Required</sup> <a name="pscUri" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.pscUri"></a>

```typescript
public readonly pscUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleBeyondcorpAppGatewayAllocatedConnections;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayAllocatedConnections">GoogleBeyondcorpAppGatewayAllocatedConnections</a>

---


### GoogleBeyondcorpAppGatewayTimeoutsOutputReference <a name="GoogleBeyondcorpAppGatewayTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleBeyondcorpAppGateway } from '@cdktn/provider-google-beta'

new googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts">GoogleBeyondcorpAppGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleBeyondcorpAppGatewayTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleBeyondcorpAppGateway.GoogleBeyondcorpAppGatewayTimeouts">GoogleBeyondcorpAppGatewayTimeouts</a>

---



