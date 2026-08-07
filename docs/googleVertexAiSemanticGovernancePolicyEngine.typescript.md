# `googleVertexAiSemanticGovernancePolicyEngine` Submodule <a name="`googleVertexAiSemanticGovernancePolicyEngine` Submodule" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiSemanticGovernancePolicyEngine <a name="GoogleVertexAiSemanticGovernancePolicyEngine" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine google_vertex_ai_semantic_governance_policy_engine}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicyEngine } from '@cdktn/provider-google-beta'

new googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine(scope: Construct, id: string, config?: GoogleVertexAiSemanticGovernancePolicyEngineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig">GoogleVertexAiSemanticGovernancePolicyEngineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig">GoogleVertexAiSemanticGovernancePolicyEngineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiSemanticGovernancePolicyEngineTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiSemanticGovernancePolicyEngine resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isConstruct"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicyEngine } from '@cdktn/provider-google-beta'

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformElement"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicyEngine } from '@cdktn/provider-google-beta'

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformResource"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicyEngine } from '@cdktn/provider-google-beta'

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicyEngine } from '@cdktn/provider-google-beta'

googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVertexAiSemanticGovernancePolicyEngine resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiSemanticGovernancePolicyEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiSemanticGovernancePolicyEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiSemanticGovernancePolicyEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.pscForwardingRule">pscForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.pscServiceAttachment">pscServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference">GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pscForwardingRule`<sup>Required</sup> <a name="pscForwardingRule" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.pscForwardingRule"></a>

```typescript
public readonly pscForwardingRule: string;
```

- *Type:* string

---

##### `pscServiceAttachment`<sup>Required</sup> <a name="pscServiceAttachment" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.pscServiceAttachment"></a>

```typescript
public readonly pscServiceAttachment: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference">GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiSemanticGovernancePolicyEngineTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngine.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiSemanticGovernancePolicyEngineConfig <a name="GoogleVertexAiSemanticGovernancePolicyEngineConfig" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.Initializer"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicyEngine } from '@cdktn/provider-google-beta'

const googleVertexAiSemanticGovernancePolicyEngineConfig: googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#id GoogleVertexAiSemanticGovernancePolicyEngine#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#project GoogleVertexAiSemanticGovernancePolicyEngine#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.region">region</a></code> | <code>string</code> | The region of the SemanticGovernancePolicyEngine, e.g. 'us-central1'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#deletion_policy GoogleVertexAiSemanticGovernancePolicyEngine#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#id GoogleVertexAiSemanticGovernancePolicyEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#project GoogleVertexAiSemanticGovernancePolicyEngine#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the SemanticGovernancePolicyEngine, e.g. 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#region GoogleVertexAiSemanticGovernancePolicyEngine#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiSemanticGovernancePolicyEngineTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#timeouts GoogleVertexAiSemanticGovernancePolicyEngine#timeouts}

---

### GoogleVertexAiSemanticGovernancePolicyEngineTimeouts <a name="GoogleVertexAiSemanticGovernancePolicyEngineTimeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.Initializer"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicyEngine } from '@cdktn/provider-google-beta'

const googleVertexAiSemanticGovernancePolicyEngineTimeouts: googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#create GoogleVertexAiSemanticGovernancePolicyEngine#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#delete GoogleVertexAiSemanticGovernancePolicyEngine#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#update GoogleVertexAiSemanticGovernancePolicyEngine#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#create GoogleVertexAiSemanticGovernancePolicyEngine#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#delete GoogleVertexAiSemanticGovernancePolicyEngine#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.43.0/docs/resources/google_vertex_ai_semantic_governance_policy_engine#update GoogleVertexAiSemanticGovernancePolicyEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference <a name="GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicyEngine } from '@cdktn/provider-google-beta'

new googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiSemanticGovernancePolicyEngineTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicyEngine.GoogleVertexAiSemanticGovernancePolicyEngineTimeouts">GoogleVertexAiSemanticGovernancePolicyEngineTimeouts</a>

---



