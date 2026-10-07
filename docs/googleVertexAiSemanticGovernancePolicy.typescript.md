# `googleVertexAiSemanticGovernancePolicy` Submodule <a name="`googleVertexAiSemanticGovernancePolicy` Submodule" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleVertexAiSemanticGovernancePolicy <a name="GoogleVertexAiSemanticGovernancePolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy google_vertex_ai_semantic_governance_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicy } from '@cdktn/provider-google-beta'

new googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy(scope: Construct, id: string, config: GoogleVertexAiSemanticGovernancePolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig">GoogleVertexAiSemanticGovernancePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig">GoogleVertexAiSemanticGovernancePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putAgentResponseCustomization">putAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putMcpTools">putMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetAgentResponseCustomization">resetAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetMcpTools">resetMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAgentResponseCustomization` <a name="putAgentResponseCustomization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putAgentResponseCustomization"></a>

```typescript
public putAgentResponseCustomization(value: GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putAgentResponseCustomization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---

##### `putMcpTools` <a name="putMcpTools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putMcpTools"></a>

```typescript
public putMcpTools(value: GoogleVertexAiSemanticGovernancePolicyMcpTools): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putMcpTools.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleVertexAiSemanticGovernancePolicyTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a>

---

##### `resetAgentResponseCustomization` <a name="resetAgentResponseCustomization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetAgentResponseCustomization"></a>

```typescript
public resetAgentResponseCustomization(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMcpTools` <a name="resetMcpTools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetMcpTools"></a>

```typescript
public resetMcpTools(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleVertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isConstruct"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicy } from '@cdktn/provider-google-beta'

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformElement"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicy } from '@cdktn/provider-google-beta'

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformResource"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicy } from '@cdktn/provider-google-beta'

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicy } from '@cdktn/provider-google-beta'

googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleVertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleVertexAiSemanticGovernancePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleVertexAiSemanticGovernancePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleVertexAiSemanticGovernancePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentIdentity">agentIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentResponseCustomization">agentResponseCustomization</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.mcpTools">mcpTools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference">GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference">GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentInput">agentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentResponseCustomizationInput">agentResponseCustomizationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.mcpToolsInput">mcpToolsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.naturalLanguageConstraintInput">naturalLanguageConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyIdInput">semanticGovernancePolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agent">agent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.naturalLanguageConstraint">naturalLanguageConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyId">semanticGovernancePolicyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agentIdentity`<sup>Required</sup> <a name="agentIdentity" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentIdentity"></a>

```typescript
public readonly agentIdentity: string;
```

- *Type:* string

---

##### `agentResponseCustomization`<sup>Required</sup> <a name="agentResponseCustomization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentResponseCustomization"></a>

```typescript
public readonly agentResponseCustomization: GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `mcpTools`<sup>Required</sup> <a name="mcpTools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.mcpTools"></a>

```typescript
public readonly mcpTools: GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference">GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference">GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentInput"></a>

```typescript
public readonly agentInput: string;
```

- *Type:* string

---

##### `agentResponseCustomizationInput`<sup>Optional</sup> <a name="agentResponseCustomizationInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agentResponseCustomizationInput"></a>

```typescript
public readonly agentResponseCustomizationInput: GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mcpToolsInput`<sup>Optional</sup> <a name="mcpToolsInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.mcpToolsInput"></a>

```typescript
public readonly mcpToolsInput: GoogleVertexAiSemanticGovernancePolicyMcpTools;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a>

---

##### `naturalLanguageConstraintInput`<sup>Optional</sup> <a name="naturalLanguageConstraintInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.naturalLanguageConstraintInput"></a>

```typescript
public readonly naturalLanguageConstraintInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `semanticGovernancePolicyIdInput`<sup>Optional</sup> <a name="semanticGovernancePolicyIdInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyIdInput"></a>

```typescript
public readonly semanticGovernancePolicyIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleVertexAiSemanticGovernancePolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a>

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.agent"></a>

```typescript
public readonly agent: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `naturalLanguageConstraint`<sup>Required</sup> <a name="naturalLanguageConstraint" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.naturalLanguageConstraint"></a>

```typescript
public readonly naturalLanguageConstraint: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `semanticGovernancePolicyId`<sup>Required</sup> <a name="semanticGovernancePolicyId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyId"></a>

```typescript
public readonly semanticGovernancePolicyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization <a name="GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization.Initializer"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicy } from '@cdktn/provider-google-beta'

const googleVertexAiSemanticGovernancePolicyAgentResponseCustomization: googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization.property.denialMessage">denialMessage</a></code> | <code>string</code> | Custom message shown to the end user when the policy check results in a denial. |

---

##### `denialMessage`<sup>Optional</sup> <a name="denialMessage" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization.property.denialMessage"></a>

```typescript
public readonly denialMessage: string;
```

- *Type:* string

Custom message shown to the end user when the policy check results in a denial.

Use this
to explain the rationale to the user. Max 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#denial_message GoogleVertexAiSemanticGovernancePolicy#denial_message}

---

### GoogleVertexAiSemanticGovernancePolicyConfig <a name="GoogleVertexAiSemanticGovernancePolicyConfig" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.Initializer"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicy } from '@cdktn/provider-google-beta'

const googleVertexAiSemanticGovernancePolicyConfig: googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.agent">agent</a></code> | <code>string</code> | The name of the agent in Agent Registry that is affected by this policy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.naturalLanguageConstraint">naturalLanguageConstraint</a></code> | <code>string</code> | The natural language constraint of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.semanticGovernancePolicyId">semanticGovernancePolicyId</a></code> | <code>string</code> | The ID of the SemanticGovernancePolicy, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.agentResponseCustomization">agentResponseCustomization</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | agent_response_customization block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.description">description</a></code> | <code>string</code> | The description of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.displayName">displayName</a></code> | <code>string</code> | The user-defined name of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#id GoogleVertexAiSemanticGovernancePolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.mcpTools">mcpTools</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a></code> | mcp_tools block. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#project GoogleVertexAiSemanticGovernancePolicy#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.region">region</a></code> | <code>string</code> | The region of the SemanticGovernancePolicy, e.g. 'us-central1'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.agent"></a>

```typescript
public readonly agent: string;
```

- *Type:* string

The name of the agent in Agent Registry that is affected by this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#agent GoogleVertexAiSemanticGovernancePolicy#agent}

---

##### `naturalLanguageConstraint`<sup>Required</sup> <a name="naturalLanguageConstraint" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.naturalLanguageConstraint"></a>

```typescript
public readonly naturalLanguageConstraint: string;
```

- *Type:* string

The natural language constraint of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#natural_language_constraint GoogleVertexAiSemanticGovernancePolicy#natural_language_constraint}

---

##### `semanticGovernancePolicyId`<sup>Required</sup> <a name="semanticGovernancePolicyId" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.semanticGovernancePolicyId"></a>

```typescript
public readonly semanticGovernancePolicyId: string;
```

- *Type:* string

The ID of the SemanticGovernancePolicy, which will become the final component of the resource name.

This value may be up to 63 characters, and valid characters are [a-z0-9-]. The first character cannot be a number or hyphen. The last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#semantic_governance_policy_id GoogleVertexAiSemanticGovernancePolicy#semantic_governance_policy_id}

---

##### `agentResponseCustomization`<sup>Optional</sup> <a name="agentResponseCustomization" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.agentResponseCustomization"></a>

```typescript
public readonly agentResponseCustomization: GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

agent_response_customization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#agent_response_customization GoogleVertexAiSemanticGovernancePolicy#agent_response_customization}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#deletion_policy GoogleVertexAiSemanticGovernancePolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#description GoogleVertexAiSemanticGovernancePolicy#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The user-defined name of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#display_name GoogleVertexAiSemanticGovernancePolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#id GoogleVertexAiSemanticGovernancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcpTools`<sup>Optional</sup> <a name="mcpTools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.mcpTools"></a>

```typescript
public readonly mcpTools: GoogleVertexAiSemanticGovernancePolicyMcpTools;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a>

mcp_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#mcp_tools GoogleVertexAiSemanticGovernancePolicy#mcp_tools}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#project GoogleVertexAiSemanticGovernancePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region of the SemanticGovernancePolicy, e.g. 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#region GoogleVertexAiSemanticGovernancePolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleVertexAiSemanticGovernancePolicyTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#timeouts GoogleVertexAiSemanticGovernancePolicy#timeouts}

---

### GoogleVertexAiSemanticGovernancePolicyMcpTools <a name="GoogleVertexAiSemanticGovernancePolicyMcpTools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.Initializer"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicy } from '@cdktn/provider-google-beta'

const googleVertexAiSemanticGovernancePolicyMcpTools: googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.property.mcpServer">mcpServer</a></code> | <code>string</code> | The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.property.tools">tools</a></code> | <code>string[]</code> | The resource names of the McpTools used by the Agent that is affected by this policy. |

---

##### `mcpServer`<sup>Required</sup> <a name="mcpServer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.property.mcpServer"></a>

```typescript
public readonly mcpServer: string;
```

- *Type:* string

The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#mcp_server GoogleVertexAiSemanticGovernancePolicy#mcp_server}

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

The resource names of the McpTools used by the Agent that is affected by this policy.

At least one tool must be listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#tools GoogleVertexAiSemanticGovernancePolicy#tools}

---

### GoogleVertexAiSemanticGovernancePolicyTimeouts <a name="GoogleVertexAiSemanticGovernancePolicyTimeouts" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.Initializer"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicy } from '@cdktn/provider-google-beta'

const googleVertexAiSemanticGovernancePolicyTimeouts: googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#create GoogleVertexAiSemanticGovernancePolicy#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#delete GoogleVertexAiSemanticGovernancePolicy#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#update GoogleVertexAiSemanticGovernancePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#create GoogleVertexAiSemanticGovernancePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#delete GoogleVertexAiSemanticGovernancePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_vertex_ai_semantic_governance_policy#update GoogleVertexAiSemanticGovernancePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference <a name="GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicy } from '@cdktn/provider-google-beta'

new googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resetDenialMessage">resetDenialMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDenialMessage` <a name="resetDenialMessage" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resetDenialMessage"></a>

```typescript
public resetDenialMessage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessageInput">denialMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessage">denialMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `denialMessageInput`<sup>Optional</sup> <a name="denialMessageInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessageInput"></a>

```typescript
public readonly denialMessageInput: string;
```

- *Type:* string

---

##### `denialMessage`<sup>Required</sup> <a name="denialMessage" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessage"></a>

```typescript
public readonly denialMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization">GoogleVertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---


### GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference <a name="GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicy } from '@cdktn/provider-google-beta'

new googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServerInput">mcpServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.toolsInput">toolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServer">mcpServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.tools">tools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mcpServerInput`<sup>Optional</sup> <a name="mcpServerInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServerInput"></a>

```typescript
public readonly mcpServerInput: string;
```

- *Type:* string

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.toolsInput"></a>

```typescript
public readonly toolsInput: string[];
```

- *Type:* string[]

---

##### `mcpServer`<sup>Required</sup> <a name="mcpServer" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServer"></a>

```typescript
public readonly mcpServer: string;
```

- *Type:* string

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleVertexAiSemanticGovernancePolicyMcpTools;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyMcpTools">GoogleVertexAiSemanticGovernancePolicyMcpTools</a>

---


### GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference <a name="GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleVertexAiSemanticGovernancePolicy } from '@cdktn/provider-google-beta'

new googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleVertexAiSemanticGovernancePolicyTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleVertexAiSemanticGovernancePolicy.GoogleVertexAiSemanticGovernancePolicyTimeouts">GoogleVertexAiSemanticGovernancePolicyTimeouts</a>

---



