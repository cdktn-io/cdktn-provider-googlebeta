# `googleVertexAiAgentAnomalyDetectionScope` Submodule <a name="`googleVertexAiAgentAnomalyDetectionScope` Submodule" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiAgentAnomalyDetectionScope <a name="GoogleVertexAiAgentAnomalyDetectionScope" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope google_vertex_ai_agent_anomaly_detection_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer"></a>

```typescript
import { googleVertexAiAgentAnomalyDetectionScope } from '@cdktn/provider-google-beta'

new googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope(scope: Construct, id: string, config: GoogleVertexAiAgentAnomalyDetectionScopeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig">GoogleVertexAiAgentAnomalyDetectionScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig">GoogleVertexAiAgentAnomalyDetectionScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiAgentAnomalyDetectionScopeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiAgentAnomalyDetectionScope resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isConstruct"></a>

```typescript
import { googleVertexAiAgentAnomalyDetectionScope } from '@cdktn/provider-google-beta'

googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformElement"></a>

```typescript
import { googleVertexAiAgentAnomalyDetectionScope } from '@cdktn/provider-google-beta'

googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformResource"></a>

```typescript
import { googleVertexAiAgentAnomalyDetectionScope } from '@cdktn/provider-google-beta'

googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport"></a>

```typescript
import { googleVertexAiAgentAnomalyDetectionScope } from '@cdktn/provider-google-beta'

googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVertexAiAgentAnomalyDetectionScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiAgentAnomalyDetectionScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiAgentAnomalyDetectionScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiAgentAnomalyDetectionScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference">GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeIdInput">agentAnomalyDetectionScopeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBucketsInput">logBucketsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBucketsInput">observabilityBucketsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeId">agentAnomalyDetectionScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBuckets">logBuckets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBuckets">observabilityBuckets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference">GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference</a>

---

##### `agentAnomalyDetectionScopeIdInput`<sup>Optional</sup> <a name="agentAnomalyDetectionScopeIdInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeIdInput"></a>

```typescript
public readonly agentAnomalyDetectionScopeIdInput: string;
```

- *Type:* string

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logBucketsInput`<sup>Optional</sup> <a name="logBucketsInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBucketsInput"></a>

```typescript
public readonly logBucketsInput: string[];
```

- *Type:* string[]

---

##### `observabilityBucketsInput`<sup>Optional</sup> <a name="observabilityBucketsInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBucketsInput"></a>

```typescript
public readonly observabilityBucketsInput: string[];
```

- *Type:* string[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiAgentAnomalyDetectionScopeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

---

##### `agentAnomalyDetectionScopeId`<sup>Required</sup> <a name="agentAnomalyDetectionScopeId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.agentAnomalyDetectionScopeId"></a>

```typescript
public readonly agentAnomalyDetectionScopeId: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logBuckets`<sup>Required</sup> <a name="logBuckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.logBuckets"></a>

```typescript
public readonly logBuckets: string[];
```

- *Type:* string[]

---

##### `observabilityBuckets`<sup>Required</sup> <a name="observabilityBuckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.observabilityBuckets"></a>

```typescript
public readonly observabilityBuckets: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScope.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiAgentAnomalyDetectionScopeConfig <a name="GoogleVertexAiAgentAnomalyDetectionScopeConfig" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.Initializer"></a>

```typescript
import { googleVertexAiAgentAnomalyDetectionScope } from '@cdktn/provider-google-beta'

const googleVertexAiAgentAnomalyDetectionScopeConfig: googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.agentAnomalyDetectionScopeId">agentAnomalyDetectionScopeId</a></code> | <code>string</code> | The ID to use for the AgentAnomalyDetectionScope, which will become the final component of the scope's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.logBuckets">logBuckets</a></code> | <code>string[]</code> | Customer owned Cloud Logging bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.observabilityBuckets">observabilityBuckets</a></code> | <code>string[]</code> | Customer owned Cloud Observability bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}/datasets/{{dataset}}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.region">region</a></code> | <code>string</code> | The region of the AgentAnomalyDetectionScope, e.g. us-central1. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.displayName">displayName</a></code> | <code>string</code> | User provided display name of the AgentAnomalyDetectionScope. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#id GoogleVertexAiAgentAnomalyDetectionScope#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#project GoogleVertexAiAgentAnomalyDetectionScope#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentAnomalyDetectionScopeId`<sup>Required</sup> <a name="agentAnomalyDetectionScopeId" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.agentAnomalyDetectionScopeId"></a>

```typescript
public readonly agentAnomalyDetectionScopeId: string;
```

- *Type:* string

The ID to use for the AgentAnomalyDetectionScope, which will become the final component of the scope's resource name.

This value should be 1-63
characters and valid characters are /[a-z][0-9]-/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#agent_anomaly_detection_scope_id GoogleVertexAiAgentAnomalyDetectionScope#agent_anomaly_detection_scope_id}

---

##### `logBuckets`<sup>Required</sup> <a name="logBuckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.logBuckets"></a>

```typescript
public readonly logBuckets: string[];
```

- *Type:* string[]

Customer owned Cloud Logging bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#log_buckets GoogleVertexAiAgentAnomalyDetectionScope#log_buckets}

---

##### `observabilityBuckets`<sup>Required</sup> <a name="observabilityBuckets" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.observabilityBuckets"></a>

```typescript
public readonly observabilityBuckets: string[];
```

- *Type:* string[]

Customer owned Cloud Observability bucket resource names attached to this scope. Format: projects/{{project}}/locations/{{location}}/buckets/{{bucket}}/datasets/{{dataset}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#observability_buckets GoogleVertexAiAgentAnomalyDetectionScope#observability_buckets}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the AgentAnomalyDetectionScope, e.g. us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#region GoogleVertexAiAgentAnomalyDetectionScope#region}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#deletion_policy GoogleVertexAiAgentAnomalyDetectionScope#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User provided display name of the AgentAnomalyDetectionScope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#display_name GoogleVertexAiAgentAnomalyDetectionScope#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#id GoogleVertexAiAgentAnomalyDetectionScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#project GoogleVertexAiAgentAnomalyDetectionScope#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiAgentAnomalyDetectionScopeTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#timeouts GoogleVertexAiAgentAnomalyDetectionScope#timeouts}

---

### GoogleVertexAiAgentAnomalyDetectionScopeTimeouts <a name="GoogleVertexAiAgentAnomalyDetectionScopeTimeouts" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.Initializer"></a>

```typescript
import { googleVertexAiAgentAnomalyDetectionScope } from '@cdktn/provider-google-beta'

const googleVertexAiAgentAnomalyDetectionScopeTimeouts: googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#create GoogleVertexAiAgentAnomalyDetectionScope#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#delete GoogleVertexAiAgentAnomalyDetectionScope#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#create GoogleVertexAiAgentAnomalyDetectionScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.1/docs/resources/google_vertex_ai_agent_anomaly_detection_scope#delete GoogleVertexAiAgentAnomalyDetectionScope#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference <a name="GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiAgentAnomalyDetectionScope } from '@cdktn/provider-google-beta'

new googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiAgentAnomalyDetectionScopeTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiAgentAnomalyDetectionScope.GoogleVertexAiAgentAnomalyDetectionScopeTimeouts">GoogleVertexAiAgentAnomalyDetectionScopeTimeouts</a>

---



