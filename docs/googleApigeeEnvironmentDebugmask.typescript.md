# `googleApigeeEnvironmentDebugmask` Submodule <a name="`googleApigeeEnvironmentDebugmask` Submodule" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironmentDebugmask <a name="GoogleApigeeEnvironmentDebugmask" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask google_apigee_environment_debugmask}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer"></a>

```typescript
import { googleApigeeEnvironmentDebugmask } from '@cdktn/provider-google-beta'

new googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask(scope: Construct, id: string, config: GoogleApigeeEnvironmentDebugmaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig">GoogleApigeeEnvironmentDebugmaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig">GoogleApigeeEnvironmentDebugmaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetFaultXPaths">resetFaultXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetNamespaces">resetNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestJsonPaths">resetRequestJsonPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestXPaths">resetRequestXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseJsonPaths">resetResponseJsonPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseXPaths">resetResponseXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleApigeeEnvironmentDebugmaskTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

---

##### `resetFaultXPaths` <a name="resetFaultXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetFaultXPaths"></a>

```typescript
public resetFaultXPaths(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNamespaces` <a name="resetNamespaces" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetNamespaces"></a>

```typescript
public resetNamespaces(): void
```

##### `resetRequestJsonPaths` <a name="resetRequestJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestJsonPaths"></a>

```typescript
public resetRequestJsonPaths(): void
```

##### `resetRequestXPaths` <a name="resetRequestXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestXPaths"></a>

```typescript
public resetRequestXPaths(): void
```

##### `resetResponseJsonPaths` <a name="resetResponseJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseJsonPaths"></a>

```typescript
public resetResponseJsonPaths(): void
```

##### `resetResponseXPaths` <a name="resetResponseXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseXPaths"></a>

```typescript
public resetResponseXPaths(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVariables` <a name="resetVariables" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetVariables"></a>

```typescript
public resetVariables(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApigeeEnvironmentDebugmask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isConstruct"></a>

```typescript
import { googleApigeeEnvironmentDebugmask } from '@cdktn/provider-google-beta'

googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformElement"></a>

```typescript
import { googleApigeeEnvironmentDebugmask } from '@cdktn/provider-google-beta'

googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformResource"></a>

```typescript
import { googleApigeeEnvironmentDebugmask } from '@cdktn/provider-google-beta'

googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport"></a>

```typescript
import { googleApigeeEnvironmentDebugmask } from '@cdktn/provider-google-beta'

googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleApigeeEnvironmentDebugmask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleApigeeEnvironmentDebugmask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleApigeeEnvironmentDebugmask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironmentDebugmask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference">GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envIdInput">envIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPathsInput">faultXPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespacesInput">namespacesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPathsInput">requestJsonPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPathsInput">requestXPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPathsInput">responseJsonPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPathsInput">responseXPathsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variablesInput">variablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envId">envId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPaths">faultXPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespaces">namespaces</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPaths">requestJsonPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPaths">requestXPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPaths">responseJsonPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPaths">responseXPaths</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variables">variables</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference">GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference</a>

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envIdInput"></a>

```typescript
public readonly envIdInput: string;
```

- *Type:* string

---

##### `faultXPathsInput`<sup>Optional</sup> <a name="faultXPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPathsInput"></a>

```typescript
public readonly faultXPathsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespacesInput"></a>

```typescript
public readonly namespacesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestJsonPathsInput`<sup>Optional</sup> <a name="requestJsonPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPathsInput"></a>

```typescript
public readonly requestJsonPathsInput: string[];
```

- *Type:* string[]

---

##### `requestXPathsInput`<sup>Optional</sup> <a name="requestXPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPathsInput"></a>

```typescript
public readonly requestXPathsInput: string[];
```

- *Type:* string[]

---

##### `responseJsonPathsInput`<sup>Optional</sup> <a name="responseJsonPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPathsInput"></a>

```typescript
public readonly responseJsonPathsInput: string[];
```

- *Type:* string[]

---

##### `responseXPathsInput`<sup>Optional</sup> <a name="responseXPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPathsInput"></a>

```typescript
public readonly responseXPathsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleApigeeEnvironmentDebugmaskTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variablesInput"></a>

```typescript
public readonly variablesInput: string[];
```

- *Type:* string[]

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

---

##### `faultXPaths`<sup>Required</sup> <a name="faultXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPaths"></a>

```typescript
public readonly faultXPaths: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespaces"></a>

```typescript
public readonly namespaces: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestJsonPaths`<sup>Required</sup> <a name="requestJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPaths"></a>

```typescript
public readonly requestJsonPaths: string[];
```

- *Type:* string[]

---

##### `requestXPaths`<sup>Required</sup> <a name="requestXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPaths"></a>

```typescript
public readonly requestXPaths: string[];
```

- *Type:* string[]

---

##### `responseJsonPaths`<sup>Required</sup> <a name="responseJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPaths"></a>

```typescript
public readonly responseJsonPaths: string[];
```

- *Type:* string[]

---

##### `responseXPaths`<sup>Required</sup> <a name="responseXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPaths"></a>

```typescript
public readonly responseXPaths: string[];
```

- *Type:* string[]

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variables"></a>

```typescript
public readonly variables: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentDebugmaskConfig <a name="GoogleApigeeEnvironmentDebugmaskConfig" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.Initializer"></a>

```typescript
import { googleApigeeEnvironmentDebugmask } from '@cdktn/provider-google-beta'

const googleApigeeEnvironmentDebugmaskConfig: googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.envId">envId</a></code> | <code>string</code> | The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.faultXPaths">faultXPaths</a></code> | <code>string[]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#id GoogleApigeeEnvironmentDebugmask#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.namespaces">namespaces</a></code> | <code>{[ key: string ]: string}</code> | Map of namespaces to URIs. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestJsonPaths">requestJsonPaths</a></code> | <code>string[]</code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestXPaths">requestXPaths</a></code> | <code>string[]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseJsonPaths">responseJsonPaths</a></code> | <code>string[]</code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseXPaths">responseXPaths</a></code> | <code>string[]</code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.variables">variables</a></code> | <code>string[]</code> | List of variables that the debug mask applies to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.envId"></a>

```typescript
public readonly envId: string;
```

- *Type:* string

The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#env_id GoogleApigeeEnvironmentDebugmask#env_id}

---

##### `faultXPaths`<sup>Optional</sup> <a name="faultXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.faultXPaths"></a>

```typescript
public readonly faultXPaths: string[];
```

- *Type:* string[]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#fault_x_paths GoogleApigeeEnvironmentDebugmask#fault_x_paths}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#id GoogleApigeeEnvironmentDebugmask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.namespaces"></a>

```typescript
public readonly namespaces: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of namespaces to URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#namespaces GoogleApigeeEnvironmentDebugmask#namespaces}

---

##### `requestJsonPaths`<sup>Optional</sup> <a name="requestJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestJsonPaths"></a>

```typescript
public readonly requestJsonPaths: string[];
```

- *Type:* string[]

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#request_json_paths GoogleApigeeEnvironmentDebugmask#request_json_paths}

---

##### `requestXPaths`<sup>Optional</sup> <a name="requestXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestXPaths"></a>

```typescript
public readonly requestXPaths: string[];
```

- *Type:* string[]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#request_x_paths GoogleApigeeEnvironmentDebugmask#request_x_paths}

---

##### `responseJsonPaths`<sup>Optional</sup> <a name="responseJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseJsonPaths"></a>

```typescript
public readonly responseJsonPaths: string[];
```

- *Type:* string[]

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#response_json_paths GoogleApigeeEnvironmentDebugmask#response_json_paths}

---

##### `responseXPaths`<sup>Optional</sup> <a name="responseXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseXPaths"></a>

```typescript
public readonly responseXPaths: string[];
```

- *Type:* string[]

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#response_x_paths GoogleApigeeEnvironmentDebugmask#response_x_paths}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleApigeeEnvironmentDebugmaskTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#timeouts GoogleApigeeEnvironmentDebugmask#timeouts}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.variables"></a>

```typescript
public readonly variables: string[];
```

- *Type:* string[]

List of variables that the debug mask applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#variables GoogleApigeeEnvironmentDebugmask#variables}

---

### GoogleApigeeEnvironmentDebugmaskTimeouts <a name="GoogleApigeeEnvironmentDebugmaskTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.Initializer"></a>

```typescript
import { googleApigeeEnvironmentDebugmask } from '@cdktn/provider-google-beta'

const googleApigeeEnvironmentDebugmaskTimeouts: googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#create GoogleApigeeEnvironmentDebugmask#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#delete GoogleApigeeEnvironmentDebugmask#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#update GoogleApigeeEnvironmentDebugmask#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#create GoogleApigeeEnvironmentDebugmask#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#delete GoogleApigeeEnvironmentDebugmask#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_apigee_environment_debugmask#update GoogleApigeeEnvironmentDebugmask#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference <a name="GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleApigeeEnvironmentDebugmask } from '@cdktn/provider-google-beta'

new googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleApigeeEnvironmentDebugmaskTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

---



