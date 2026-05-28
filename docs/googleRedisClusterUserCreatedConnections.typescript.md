# `googleRedisClusterUserCreatedConnections` Submodule <a name="`googleRedisClusterUserCreatedConnections` Submodule" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleRedisClusterUserCreatedConnections <a name="GoogleRedisClusterUserCreatedConnections" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections google_redis_cluster_user_created_connections}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

new googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections(scope: Construct, id: string, config: GoogleRedisClusterUserCreatedConnectionsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig">GoogleRedisClusterUserCreatedConnectionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig">GoogleRedisClusterUserCreatedConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putClusterEndpoints">putClusterEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetClusterEndpoints">resetClusterEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putClusterEndpoints` <a name="putClusterEndpoints" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putClusterEndpoints"></a>

```typescript
public putClusterEndpoints(value: IResolvable | GoogleRedisClusterUserCreatedConnectionsClusterEndpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putClusterEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleRedisClusterUserCreatedConnectionsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>

---

##### `resetClusterEndpoints` <a name="resetClusterEndpoints" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetClusterEndpoints"></a>

```typescript
public resetClusterEndpoints(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleRedisClusterUserCreatedConnections resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isConstruct"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformElement"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformResource"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleRedisClusterUserCreatedConnections resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleRedisClusterUserCreatedConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleRedisClusterUserCreatedConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleRedisClusterUserCreatedConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.clusterEndpoints">clusterEndpoints</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference">GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.clusterEndpointsInput">clusterEndpointsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `clusterEndpoints`<sup>Required</sup> <a name="clusterEndpoints" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.clusterEndpoints"></a>

```typescript
public readonly clusterEndpoints: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference">GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference</a>

---

##### `clusterEndpointsInput`<sup>Optional</sup> <a name="clusterEndpointsInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.clusterEndpointsInput"></a>

```typescript
public readonly clusterEndpointsInput: IResolvable | GoogleRedisClusterUserCreatedConnectionsClusterEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleRedisClusterUserCreatedConnectionsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnections.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleRedisClusterUserCreatedConnectionsClusterEndpoints <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpoints" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints.Initializer"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

const googleRedisClusterUserCreatedConnectionsClusterEndpoints: googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints.property.connections">connections</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>[]</code> | connections block. |

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints.property.connections"></a>

```typescript
public readonly connections: IResolvable | GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>[]

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#connections GoogleRedisClusterUserCreatedConnections#connections}

---

### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections.Initializer"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

const googleRedisClusterUserCreatedConnectionsClusterEndpointsConnections: googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections.property.pscConnection">pscConnection</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | psc_connection block. |

---

##### `pscConnection`<sup>Optional</sup> <a name="pscConnection" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections.property.pscConnection"></a>

```typescript
public readonly pscConnection: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

psc_connection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#psc_connection GoogleRedisClusterUserCreatedConnections#psc_connection}

---

### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.Initializer"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

const googleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection: googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.address">address</a></code> | <code>string</code> | The IP allocated on the consumer network for the PSC forwarding rule. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.forwardingRule">forwardingRule</a></code> | <code>string</code> | The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.network">network</a></code> | <code>string</code> | The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | The PSC connection id of the forwarding rule connected to the service attachment. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.projectId">projectId</a></code> | <code>string</code> | The consumer project_id where the forwarding rule is created from. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

The IP allocated on the consumer network for the PSC forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#address GoogleRedisClusterUserCreatedConnections#address}

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.forwardingRule"></a>

```typescript
public readonly forwardingRule: string;
```

- *Type:* string

The URI of the consumer side forwarding rule. Format: projects/{project}/regions/{region}/forwardingRules/{forwarding_rule}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#forwarding_rule GoogleRedisClusterUserCreatedConnections#forwarding_rule}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The consumer network where the IP address resides, in the form of projects/{project_id}/global/networks/{network_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#network GoogleRedisClusterUserCreatedConnections#network}

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

The PSC connection id of the forwarding rule connected to the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#psc_connection_id GoogleRedisClusterUserCreatedConnections#psc_connection_id}

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

The service attachment which is the target of the PSC connection, in the form of projects/{project-id}/regions/{region}/serviceAttachments/{service-attachment-id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#service_attachment GoogleRedisClusterUserCreatedConnections#service_attachment}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The consumer project_id where the forwarding rule is created from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#project_id GoogleRedisClusterUserCreatedConnections#project_id}

---

### GoogleRedisClusterUserCreatedConnectionsConfig <a name="GoogleRedisClusterUserCreatedConnectionsConfig" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.Initializer"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

const googleRedisClusterUserCreatedConnectionsConfig: googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.name">name</a></code> | <code>string</code> | The name of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.region">region</a></code> | <code>string</code> | The name of the region of the Redis cluster these endpoints should be added to. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.clusterEndpoints">clusterEndpoints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>[]</code> | cluster_endpoints block. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#id GoogleRedisClusterUserCreatedConnections#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#project GoogleRedisClusterUserCreatedConnections#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#name GoogleRedisClusterUserCreatedConnections#name}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The name of the region of the Redis cluster these endpoints should be added to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#region GoogleRedisClusterUserCreatedConnections#region}

---

##### `clusterEndpoints`<sup>Optional</sup> <a name="clusterEndpoints" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.clusterEndpoints"></a>

```typescript
public readonly clusterEndpoints: IResolvable | GoogleRedisClusterUserCreatedConnectionsClusterEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>[]

cluster_endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#cluster_endpoints GoogleRedisClusterUserCreatedConnections#cluster_endpoints}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#deletion_policy GoogleRedisClusterUserCreatedConnections#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#id GoogleRedisClusterUserCreatedConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#project GoogleRedisClusterUserCreatedConnections#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleRedisClusterUserCreatedConnectionsTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#timeouts GoogleRedisClusterUserCreatedConnections#timeouts}

---

### GoogleRedisClusterUserCreatedConnectionsTimeouts <a name="GoogleRedisClusterUserCreatedConnectionsTimeouts" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.Initializer"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

const googleRedisClusterUserCreatedConnectionsTimeouts: googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#create GoogleRedisClusterUserCreatedConnections#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#delete GoogleRedisClusterUserCreatedConnections#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#update GoogleRedisClusterUserCreatedConnections#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#create GoogleRedisClusterUserCreatedConnections#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#delete GoogleRedisClusterUserCreatedConnections#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_redis_cluster_user_created_connections#update GoogleRedisClusterUserCreatedConnections#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

new googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get"></a>

```typescript
public get(index: number): GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>[]

---


### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

new googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection">putPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resetPscConnection">resetPscConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPscConnection` <a name="putPscConnection" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection"></a>

```typescript
public putPscConnection(value: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.putPscConnection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---

##### `resetPscConnection` <a name="resetPscConnection" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.resetPscConnection"></a>

```typescript
public resetPscConnection(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnection">pscConnection</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnectionInput">pscConnectionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pscConnection`<sup>Required</sup> <a name="pscConnection" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnection"></a>

```typescript
public readonly pscConnection: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference</a>

---

##### `pscConnectionInput`<sup>Optional</sup> <a name="pscConnectionInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.pscConnectionInput"></a>

```typescript
public readonly pscConnectionInput: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>

---


### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

new googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus">pscConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput">forwardingRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput">pscConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput">serviceAttachmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule">forwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment">serviceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `pscConnectionStatus`<sup>Required</sup> <a name="pscConnectionStatus" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionStatus"></a>

```typescript
public readonly pscConnectionStatus: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `forwardingRuleInput`<sup>Optional</sup> <a name="forwardingRuleInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRuleInput"></a>

```typescript
public readonly forwardingRuleInput: string;
```

- *Type:* string

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `pscConnectionIdInput`<sup>Optional</sup> <a name="pscConnectionIdInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionIdInput"></a>

```typescript
public readonly pscConnectionIdInput: string;
```

- *Type:* string

---

##### `serviceAttachmentInput`<sup>Optional</sup> <a name="serviceAttachmentInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachmentInput"></a>

```typescript
public readonly serviceAttachmentInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `forwardingRule`<sup>Required</sup> <a name="forwardingRule" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.forwardingRule"></a>

```typescript
public readonly forwardingRule: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

---

##### `serviceAttachment`<sup>Required</sup> <a name="serviceAttachment" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.serviceAttachment"></a>

```typescript
public readonly serviceAttachment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsPscConnection</a>

---


### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

new googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.get"></a>

```typescript
public get(index: number): GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleRedisClusterUserCreatedConnectionsClusterEndpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>[]

---


### GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference <a name="GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

new googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resetConnections">resetConnections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnections` <a name="putConnections" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections"></a>

```typescript
public putConnections(value: IResolvable | GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.putConnections.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>[]

---

##### `resetConnections` <a name="resetConnections" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.resetConnections"></a>

```typescript
public resetConnections(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connectionsInput">connectionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connections"></a>

```typescript
public readonly connections: GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnectionsList</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.connectionsInput"></a>

```typescript
public readonly connectionsInput: IResolvable | GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections">GoogleRedisClusterUserCreatedConnectionsClusterEndpointsConnections</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleRedisClusterUserCreatedConnectionsClusterEndpoints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsClusterEndpoints">GoogleRedisClusterUserCreatedConnectionsClusterEndpoints</a>

---


### GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference <a name="GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleRedisClusterUserCreatedConnections } from '@cdktn/provider-google-beta'

new googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleRedisClusterUserCreatedConnectionsTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleRedisClusterUserCreatedConnections.GoogleRedisClusterUserCreatedConnectionsTimeouts">GoogleRedisClusterUserCreatedConnectionsTimeouts</a>

---



