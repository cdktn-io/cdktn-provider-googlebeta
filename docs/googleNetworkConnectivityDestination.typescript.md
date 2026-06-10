# `googleNetworkConnectivityDestination` Submodule <a name="`googleNetworkConnectivityDestination` Submodule" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkConnectivityDestination <a name="GoogleNetworkConnectivityDestination" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination google_network_connectivity_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.Initializer"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

new googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination(scope: Construct, id: string, config: GoogleNetworkConnectivityDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig">GoogleNetworkConnectivityDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig">GoogleNetworkConnectivityDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.putEndpoints">putEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoints` <a name="putEndpoints" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.putEndpoints"></a>

```typescript
public putEndpoints(value: IResolvable | GoogleNetworkConnectivityDestinationEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.putEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints">GoogleNetworkConnectivityDestinationEndpoints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleNetworkConnectivityDestinationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts">GoogleNetworkConnectivityDestinationTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkConnectivityDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.isConstruct"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.isTerraformElement"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.isTerraformResource"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.generateConfigForImport"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleNetworkConnectivityDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleNetworkConnectivityDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleNetworkConnectivityDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkConnectivityDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList">GoogleNetworkConnectivityDestinationEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.stateTimeline">stateTimeline</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList">GoogleNetworkConnectivityDestinationStateTimelineList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.terraformLabels">terraformLabels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference">GoogleNetworkConnectivityDestinationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.endpointsInput">endpointsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints">GoogleNetworkConnectivityDestinationEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.ipPrefixInput">ipPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.multicloudDataTransferConfigInput">multicloudDataTransferConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts">GoogleNetworkConnectivityDestinationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.ipPrefix">ipPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.multicloudDataTransferConfig">multicloudDataTransferConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.endpoints"></a>

```typescript
public readonly endpoints: GoogleNetworkConnectivityDestinationEndpointsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList">GoogleNetworkConnectivityDestinationEndpointsList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `stateTimeline`<sup>Required</sup> <a name="stateTimeline" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.stateTimeline"></a>

```typescript
public readonly stateTimeline: GoogleNetworkConnectivityDestinationStateTimelineList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList">GoogleNetworkConnectivityDestinationStateTimelineList</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkConnectivityDestinationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference">GoogleNetworkConnectivityDestinationTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: IResolvable | GoogleNetworkConnectivityDestinationEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints">GoogleNetworkConnectivityDestinationEndpoints</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipPrefixInput`<sup>Optional</sup> <a name="ipPrefixInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.ipPrefixInput"></a>

```typescript
public readonly ipPrefixInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `multicloudDataTransferConfigInput`<sup>Optional</sup> <a name="multicloudDataTransferConfigInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.multicloudDataTransferConfigInput"></a>

```typescript
public readonly multicloudDataTransferConfigInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleNetworkConnectivityDestinationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts">GoogleNetworkConnectivityDestinationTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipPrefix`<sup>Required</sup> <a name="ipPrefix" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.ipPrefix"></a>

```typescript
public readonly ipPrefix: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `multicloudDataTransferConfig`<sup>Required</sup> <a name="multicloudDataTransferConfig" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.multicloudDataTransferConfig"></a>

```typescript
public readonly multicloudDataTransferConfig: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkConnectivityDestinationConfig <a name="GoogleNetworkConnectivityDestinationConfig" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.Initializer"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

const googleNetworkConnectivityDestinationConfig: googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.endpoints">endpoints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints">GoogleNetworkConnectivityDestinationEndpoints</a>[]</code> | endpoints block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.ipPrefix">ipPrefix</a></code> | <code>string</code> | The IP prefix that represents your workload on another CSP. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.location">location</a></code> | <code>string</code> | The location of the destination. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.multicloudDataTransferConfig">multicloudDataTransferConfig</a></code> | <code>string</code> | The multicloud data transfer config of the destination. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.name">name</a></code> | <code>string</code> | The name of the destination. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.description">description</a></code> | <code>string</code> | A description of this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#id GoogleNetworkConnectivityDestination#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#project GoogleNetworkConnectivityDestination#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts">GoogleNetworkConnectivityDestinationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.endpoints"></a>

```typescript
public readonly endpoints: IResolvable | GoogleNetworkConnectivityDestinationEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints">GoogleNetworkConnectivityDestinationEndpoints</a>[]

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#endpoints GoogleNetworkConnectivityDestination#endpoints}

---

##### `ipPrefix`<sup>Required</sup> <a name="ipPrefix" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.ipPrefix"></a>

```typescript
public readonly ipPrefix: string;
```

- *Type:* string

The IP prefix that represents your workload on another CSP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#ip_prefix GoogleNetworkConnectivityDestination#ip_prefix}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#location GoogleNetworkConnectivityDestination#location}

---

##### `multicloudDataTransferConfig`<sup>Required</sup> <a name="multicloudDataTransferConfig" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.multicloudDataTransferConfig"></a>

```typescript
public readonly multicloudDataTransferConfig: string;
```

- *Type:* string

The multicloud data transfer config of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#multicloud_data_transfer_config GoogleNetworkConnectivityDestination#multicloud_data_transfer_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#name GoogleNetworkConnectivityDestination#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#deletion_policy GoogleNetworkConnectivityDestination#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#description GoogleNetworkConnectivityDestination#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#id GoogleNetworkConnectivityDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#labels GoogleNetworkConnectivityDestination#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#project GoogleNetworkConnectivityDestination#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleNetworkConnectivityDestinationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts">GoogleNetworkConnectivityDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#timeouts GoogleNetworkConnectivityDestination#timeouts}

---

### GoogleNetworkConnectivityDestinationEndpoints <a name="GoogleNetworkConnectivityDestinationEndpoints" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints.Initializer"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

const googleNetworkConnectivityDestinationEndpoints: googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints.property.asn">asn</a></code> | <code>string</code> | The ASN of the remote IP prefix. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints.property.csp">csp</a></code> | <code>string</code> | The CSP of the remote IP prefix. |

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints.property.asn"></a>

```typescript
public readonly asn: string;
```

- *Type:* string

The ASN of the remote IP prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#asn GoogleNetworkConnectivityDestination#asn}

---

##### `csp`<sup>Required</sup> <a name="csp" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints.property.csp"></a>

```typescript
public readonly csp: string;
```

- *Type:* string

The CSP of the remote IP prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#csp GoogleNetworkConnectivityDestination#csp}

---

### GoogleNetworkConnectivityDestinationStateTimeline <a name="GoogleNetworkConnectivityDestinationStateTimeline" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimeline"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimeline.Initializer"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

const googleNetworkConnectivityDestinationStateTimeline: googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimeline = { ... }
```


### GoogleNetworkConnectivityDestinationStateTimelineStates <a name="GoogleNetworkConnectivityDestinationStateTimelineStates" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStates.Initializer"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

const googleNetworkConnectivityDestinationStateTimelineStates: googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStates = { ... }
```


### GoogleNetworkConnectivityDestinationTimeouts <a name="GoogleNetworkConnectivityDestinationTimeouts" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts.Initializer"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

const googleNetworkConnectivityDestinationTimeouts: googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#create GoogleNetworkConnectivityDestination#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#delete GoogleNetworkConnectivityDestination#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#update GoogleNetworkConnectivityDestination#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#create GoogleNetworkConnectivityDestination#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#delete GoogleNetworkConnectivityDestination#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/resources/google_network_connectivity_destination#update GoogleNetworkConnectivityDestination#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkConnectivityDestinationEndpointsList <a name="GoogleNetworkConnectivityDestinationEndpointsList" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.Initializer"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

new googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.get"></a>

```typescript
public get(index: number): GoogleNetworkConnectivityDestinationEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints">GoogleNetworkConnectivityDestinationEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkConnectivityDestinationEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints">GoogleNetworkConnectivityDestinationEndpoints</a>[]

---


### GoogleNetworkConnectivityDestinationEndpointsOutputReference <a name="GoogleNetworkConnectivityDestinationEndpointsOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.Initializer"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

new googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.asnInput">asnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.cspInput">cspInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.asn">asn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.csp">csp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints">GoogleNetworkConnectivityDestinationEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `asnInput`<sup>Optional</sup> <a name="asnInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.asnInput"></a>

```typescript
public readonly asnInput: string;
```

- *Type:* string

---

##### `cspInput`<sup>Optional</sup> <a name="cspInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.cspInput"></a>

```typescript
public readonly cspInput: string;
```

- *Type:* string

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.asn"></a>

```typescript
public readonly asn: string;
```

- *Type:* string

---

##### `csp`<sup>Required</sup> <a name="csp" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.csp"></a>

```typescript
public readonly csp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkConnectivityDestinationEndpoints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationEndpoints">GoogleNetworkConnectivityDestinationEndpoints</a>

---


### GoogleNetworkConnectivityDestinationStateTimelineList <a name="GoogleNetworkConnectivityDestinationStateTimelineList" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.Initializer"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

new googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.get"></a>

```typescript
public get(index: number): GoogleNetworkConnectivityDestinationStateTimelineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleNetworkConnectivityDestinationStateTimelineOutputReference <a name="GoogleNetworkConnectivityDestinationStateTimelineOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.Initializer"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

new googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.property.states">states</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList">GoogleNetworkConnectivityDestinationStateTimelineStatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimeline">GoogleNetworkConnectivityDestinationStateTimeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `states`<sup>Required</sup> <a name="states" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.property.states"></a>

```typescript
public readonly states: GoogleNetworkConnectivityDestinationStateTimelineStatesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList">GoogleNetworkConnectivityDestinationStateTimelineStatesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkConnectivityDestinationStateTimeline;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimeline">GoogleNetworkConnectivityDestinationStateTimeline</a>

---


### GoogleNetworkConnectivityDestinationStateTimelineStatesList <a name="GoogleNetworkConnectivityDestinationStateTimelineStatesList" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.Initializer"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

new googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.get"></a>

```typescript
public get(index: number): GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference <a name="GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

new googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.property.effectiveTime">effectiveTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStates">GoogleNetworkConnectivityDestinationStateTimelineStates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectiveTime`<sup>Required</sup> <a name="effectiveTime" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.property.effectiveTime"></a>

```typescript
public readonly effectiveTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleNetworkConnectivityDestinationStateTimelineStates;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationStateTimelineStates">GoogleNetworkConnectivityDestinationStateTimelineStates</a>

---


### GoogleNetworkConnectivityDestinationTimeoutsOutputReference <a name="GoogleNetworkConnectivityDestinationTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleNetworkConnectivityDestination } from '@cdktn/provider-google-beta'

new googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts">GoogleNetworkConnectivityDestinationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleNetworkConnectivityDestinationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleNetworkConnectivityDestination.GoogleNetworkConnectivityDestinationTimeouts">GoogleNetworkConnectivityDestinationTimeouts</a>

---



