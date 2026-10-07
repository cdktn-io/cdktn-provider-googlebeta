# `googleCesAgent` Submodule <a name="`googleCesAgent` Submodule" id="@cdktn/provider-google-beta.googleCesAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCesAgent <a name="GoogleCesAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent google_ces_agent}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgent(scope: Construct, id: string, config: GoogleCesAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig">GoogleCesAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig">GoogleCesAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterAgentCallbacks">putAfterAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterModelCallbacks">putAfterModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterToolCallbacks">putAfterToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeAgentCallbacks">putBeforeAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeModelCallbacks">putBeforeModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeToolCallbacks">putBeforeToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putLlmAgent">putLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteA2AAgent">putRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent">putRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putToolsets">putToolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTransferRules">putTransferRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterAgentCallbacks">resetAfterAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterModelCallbacks">resetAfterModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterToolCallbacks">resetAfterToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAgentId">resetAgentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeAgentCallbacks">resetBeforeAgentCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeModelCallbacks">resetBeforeModelCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeToolCallbacks">resetBeforeToolCallbacks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetChildAgents">resetChildAgents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetGuardrails">resetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetLlmAgent">resetLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetModelSettings">resetModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteA2AAgent">resetRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteDialogflowAgent">resetRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTools">resetTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetToolsets">resetToolsets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTransferRules">resetTransferRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAfterAgentCallbacks` <a name="putAfterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterAgentCallbacks"></a>

```typescript
public putAfterAgentCallbacks(value: IResolvable | GoogleCesAgentAfterAgentCallbacks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterAgentCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>[]

---

##### `putAfterModelCallbacks` <a name="putAfterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterModelCallbacks"></a>

```typescript
public putAfterModelCallbacks(value: IResolvable | GoogleCesAgentAfterModelCallbacks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterModelCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>[]

---

##### `putAfterToolCallbacks` <a name="putAfterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterToolCallbacks"></a>

```typescript
public putAfterToolCallbacks(value: IResolvable | GoogleCesAgentAfterToolCallbacks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putAfterToolCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>[]

---

##### `putBeforeAgentCallbacks` <a name="putBeforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeAgentCallbacks"></a>

```typescript
public putBeforeAgentCallbacks(value: IResolvable | GoogleCesAgentBeforeAgentCallbacks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeAgentCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>[]

---

##### `putBeforeModelCallbacks` <a name="putBeforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeModelCallbacks"></a>

```typescript
public putBeforeModelCallbacks(value: IResolvable | GoogleCesAgentBeforeModelCallbacks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeModelCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>[]

---

##### `putBeforeToolCallbacks` <a name="putBeforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeToolCallbacks"></a>

```typescript
public putBeforeToolCallbacks(value: IResolvable | GoogleCesAgentBeforeToolCallbacks[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putBeforeToolCallbacks.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>[]

---

##### `putLlmAgent` <a name="putLlmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putLlmAgent"></a>

```typescript
public putLlmAgent(value: GoogleCesAgentLlmAgent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putLlmAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

---

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putModelSettings"></a>

```typescript
public putModelSettings(value: GoogleCesAgentModelSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

---

##### `putRemoteA2AAgent` <a name="putRemoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteA2AAgent"></a>

```typescript
public putRemoteA2AAgent(value: GoogleCesAgentRemoteA2AAgent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteA2AAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

---

##### `putRemoteDialogflowAgent` <a name="putRemoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent"></a>

```typescript
public putRemoteDialogflowAgent(value: GoogleCesAgentRemoteDialogflowAgent): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putRemoteDialogflowAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCesAgentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

---

##### `putToolsets` <a name="putToolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putToolsets"></a>

```typescript
public putToolsets(value: IResolvable | GoogleCesAgentToolsets[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putToolsets.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>[]

---

##### `putTransferRules` <a name="putTransferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTransferRules"></a>

```typescript
public putTransferRules(value: IResolvable | GoogleCesAgentTransferRules[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.putTransferRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>[]

---

##### `resetAfterAgentCallbacks` <a name="resetAfterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterAgentCallbacks"></a>

```typescript
public resetAfterAgentCallbacks(): void
```

##### `resetAfterModelCallbacks` <a name="resetAfterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterModelCallbacks"></a>

```typescript
public resetAfterModelCallbacks(): void
```

##### `resetAfterToolCallbacks` <a name="resetAfterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAfterToolCallbacks"></a>

```typescript
public resetAfterToolCallbacks(): void
```

##### `resetAgentId` <a name="resetAgentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetAgentId"></a>

```typescript
public resetAgentId(): void
```

##### `resetBeforeAgentCallbacks` <a name="resetBeforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeAgentCallbacks"></a>

```typescript
public resetBeforeAgentCallbacks(): void
```

##### `resetBeforeModelCallbacks` <a name="resetBeforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeModelCallbacks"></a>

```typescript
public resetBeforeModelCallbacks(): void
```

##### `resetBeforeToolCallbacks` <a name="resetBeforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetBeforeToolCallbacks"></a>

```typescript
public resetBeforeToolCallbacks(): void
```

##### `resetChildAgents` <a name="resetChildAgents" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetChildAgents"></a>

```typescript
public resetChildAgents(): void
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGuardrails` <a name="resetGuardrails" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetGuardrails"></a>

```typescript
public resetGuardrails(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetLlmAgent` <a name="resetLlmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetLlmAgent"></a>

```typescript
public resetLlmAgent(): void
```

##### `resetModelSettings` <a name="resetModelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetModelSettings"></a>

```typescript
public resetModelSettings(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRemoteA2AAgent` <a name="resetRemoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteA2AAgent"></a>

```typescript
public resetRemoteA2AAgent(): void
```

##### `resetRemoteDialogflowAgent` <a name="resetRemoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetRemoteDialogflowAgent"></a>

```typescript
public resetRemoteDialogflowAgent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTools` <a name="resetTools" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTools"></a>

```typescript
public resetTools(): void
```

##### `resetToolsets` <a name="resetToolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetToolsets"></a>

```typescript
public resetToolsets(): void
```

##### `resetTransferRules` <a name="resetTransferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.resetTransferRules"></a>

```typescript
public resetTransferRules(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleCesAgent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isConstruct"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

googleCesAgent.GoogleCesAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformElement"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

googleCesAgent.GoogleCesAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformResource"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

googleCesAgent.GoogleCesAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

googleCesAgent.GoogleCesAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleCesAgent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCesAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCesAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleCesAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacks">afterAgentCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList">GoogleCesAgentAfterAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacks">afterModelCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList">GoogleCesAgentAfterModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacks">afterToolCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList">GoogleCesAgentAfterToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacks">beforeAgentCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList">GoogleCesAgentBeforeAgentCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacks">beforeModelCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList">GoogleCesAgentBeforeModelCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacks">beforeToolCallbacks</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList">GoogleCesAgentBeforeToolCallbacksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.generatedSummary">generatedSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgent">llmAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference">GoogleCesAgentLlmAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference">GoogleCesAgentModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgent">remoteA2AAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference">GoogleCesAgentRemoteA2AAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgent">remoteDialogflowAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference">GoogleCesAgentRemoteDialogflowAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference">GoogleCesAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsets">toolsets</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList">GoogleCesAgentToolsetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRules">transferRules</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList">GoogleCesAgentTransferRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacksInput">afterAgentCallbacksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacksInput">afterModelCallbacksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacksInput">afterToolCallbacksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentIdInput">agentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.appInput">appInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacksInput">beforeAgentCallbacksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacksInput">beforeModelCallbacksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacksInput">beforeToolCallbacksInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgentsInput">childAgentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrailsInput">guardrailsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instructionInput">instructionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgentInput">llmAgentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgentInput">remoteA2AAgentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgentInput">remoteDialogflowAgentInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsetsInput">toolsetsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsInput">toolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRulesInput">transferRulesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.app">app</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgents">childAgents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrails">guardrails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instruction">instruction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tools">tools</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `afterAgentCallbacks`<sup>Required</sup> <a name="afterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacks"></a>

```typescript
public readonly afterAgentCallbacks: GoogleCesAgentAfterAgentCallbacksList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList">GoogleCesAgentAfterAgentCallbacksList</a>

---

##### `afterModelCallbacks`<sup>Required</sup> <a name="afterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacks"></a>

```typescript
public readonly afterModelCallbacks: GoogleCesAgentAfterModelCallbacksList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList">GoogleCesAgentAfterModelCallbacksList</a>

---

##### `afterToolCallbacks`<sup>Required</sup> <a name="afterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacks"></a>

```typescript
public readonly afterToolCallbacks: GoogleCesAgentAfterToolCallbacksList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList">GoogleCesAgentAfterToolCallbacksList</a>

---

##### `beforeAgentCallbacks`<sup>Required</sup> <a name="beforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacks"></a>

```typescript
public readonly beforeAgentCallbacks: GoogleCesAgentBeforeAgentCallbacksList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList">GoogleCesAgentBeforeAgentCallbacksList</a>

---

##### `beforeModelCallbacks`<sup>Required</sup> <a name="beforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacks"></a>

```typescript
public readonly beforeModelCallbacks: GoogleCesAgentBeforeModelCallbacksList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList">GoogleCesAgentBeforeModelCallbacksList</a>

---

##### `beforeToolCallbacks`<sup>Required</sup> <a name="beforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacks"></a>

```typescript
public readonly beforeToolCallbacks: GoogleCesAgentBeforeToolCallbacksList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList">GoogleCesAgentBeforeToolCallbacksList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `generatedSummary`<sup>Required</sup> <a name="generatedSummary" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.generatedSummary"></a>

```typescript
public readonly generatedSummary: string;
```

- *Type:* string

---

##### `llmAgent`<sup>Required</sup> <a name="llmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgent"></a>

```typescript
public readonly llmAgent: GoogleCesAgentLlmAgentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference">GoogleCesAgentLlmAgentOutputReference</a>

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettings"></a>

```typescript
public readonly modelSettings: GoogleCesAgentModelSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference">GoogleCesAgentModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `remoteA2AAgent`<sup>Required</sup> <a name="remoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgent"></a>

```typescript
public readonly remoteA2AAgent: GoogleCesAgentRemoteA2AAgentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference">GoogleCesAgentRemoteA2AAgentOutputReference</a>

---

##### `remoteDialogflowAgent`<sup>Required</sup> <a name="remoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgent"></a>

```typescript
public readonly remoteDialogflowAgent: GoogleCesAgentRemoteDialogflowAgentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference">GoogleCesAgentRemoteDialogflowAgentOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCesAgentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference">GoogleCesAgentTimeoutsOutputReference</a>

---

##### `toolsets`<sup>Required</sup> <a name="toolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsets"></a>

```typescript
public readonly toolsets: GoogleCesAgentToolsetsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList">GoogleCesAgentToolsetsList</a>

---

##### `transferRules`<sup>Required</sup> <a name="transferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRules"></a>

```typescript
public readonly transferRules: GoogleCesAgentTransferRulesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList">GoogleCesAgentTransferRulesList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `afterAgentCallbacksInput`<sup>Optional</sup> <a name="afterAgentCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterAgentCallbacksInput"></a>

```typescript
public readonly afterAgentCallbacksInput: IResolvable | GoogleCesAgentAfterAgentCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>[]

---

##### `afterModelCallbacksInput`<sup>Optional</sup> <a name="afterModelCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterModelCallbacksInput"></a>

```typescript
public readonly afterModelCallbacksInput: IResolvable | GoogleCesAgentAfterModelCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>[]

---

##### `afterToolCallbacksInput`<sup>Optional</sup> <a name="afterToolCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.afterToolCallbacksInput"></a>

```typescript
public readonly afterToolCallbacksInput: IResolvable | GoogleCesAgentAfterToolCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>[]

---

##### `agentIdInput`<sup>Optional</sup> <a name="agentIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentIdInput"></a>

```typescript
public readonly agentIdInput: string;
```

- *Type:* string

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.appInput"></a>

```typescript
public readonly appInput: string;
```

- *Type:* string

---

##### `beforeAgentCallbacksInput`<sup>Optional</sup> <a name="beforeAgentCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeAgentCallbacksInput"></a>

```typescript
public readonly beforeAgentCallbacksInput: IResolvable | GoogleCesAgentBeforeAgentCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>[]

---

##### `beforeModelCallbacksInput`<sup>Optional</sup> <a name="beforeModelCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeModelCallbacksInput"></a>

```typescript
public readonly beforeModelCallbacksInput: IResolvable | GoogleCesAgentBeforeModelCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>[]

---

##### `beforeToolCallbacksInput`<sup>Optional</sup> <a name="beforeToolCallbacksInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.beforeToolCallbacksInput"></a>

```typescript
public readonly beforeToolCallbacksInput: IResolvable | GoogleCesAgentBeforeToolCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>[]

---

##### `childAgentsInput`<sup>Optional</sup> <a name="childAgentsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgentsInput"></a>

```typescript
public readonly childAgentsInput: string[];
```

- *Type:* string[]

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `guardrailsInput`<sup>Optional</sup> <a name="guardrailsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrailsInput"></a>

```typescript
public readonly guardrailsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instructionInput"></a>

```typescript
public readonly instructionInput: string;
```

- *Type:* string

---

##### `llmAgentInput`<sup>Optional</sup> <a name="llmAgentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.llmAgentInput"></a>

```typescript
public readonly llmAgentInput: GoogleCesAgentLlmAgent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.modelSettingsInput"></a>

```typescript
public readonly modelSettingsInput: GoogleCesAgentModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `remoteA2AAgentInput`<sup>Optional</sup> <a name="remoteA2AAgentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteA2AAgentInput"></a>

```typescript
public readonly remoteA2AAgentInput: GoogleCesAgentRemoteA2AAgent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

---

##### `remoteDialogflowAgentInput`<sup>Optional</sup> <a name="remoteDialogflowAgentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.remoteDialogflowAgentInput"></a>

```typescript
public readonly remoteDialogflowAgentInput: GoogleCesAgentRemoteDialogflowAgent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCesAgentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

---

##### `toolsetsInput`<sup>Optional</sup> <a name="toolsetsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsetsInput"></a>

```typescript
public readonly toolsetsInput: IResolvable | GoogleCesAgentToolsets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>[]

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.toolsInput"></a>

```typescript
public readonly toolsInput: string[];
```

- *Type:* string[]

---

##### `transferRulesInput`<sup>Optional</sup> <a name="transferRulesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.transferRulesInput"></a>

```typescript
public readonly transferRulesInput: IResolvable | GoogleCesAgentTransferRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>[]

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

---

##### `childAgents`<sup>Required</sup> <a name="childAgents" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.childAgents"></a>

```typescript
public readonly childAgents: string[];
```

- *Type:* string[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.guardrails"></a>

```typescript
public readonly guardrails: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCesAgentAfterAgentCallbacks <a name="GoogleCesAgentAfterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentAfterAgentCallbacks: googleCesAgent.GoogleCesAgentAfterAgentCallbacks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentAfterModelCallbacks <a name="GoogleCesAgentAfterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentAfterModelCallbacks: googleCesAgent.GoogleCesAgentAfterModelCallbacks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentAfterToolCallbacks <a name="GoogleCesAgentAfterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentAfterToolCallbacks: googleCesAgent.GoogleCesAgentAfterToolCallbacks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentBeforeAgentCallbacks <a name="GoogleCesAgentBeforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentBeforeAgentCallbacks: googleCesAgent.GoogleCesAgentBeforeAgentCallbacks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentBeforeModelCallbacks <a name="GoogleCesAgentBeforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentBeforeModelCallbacks: googleCesAgent.GoogleCesAgentBeforeModelCallbacks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentBeforeToolCallbacks <a name="GoogleCesAgentBeforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentBeforeToolCallbacks: googleCesAgent.GoogleCesAgentBeforeToolCallbacks = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.description">description</a></code> | <code>string</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If enabled, the callback will also be executed on intermediate model outputs. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disabled GoogleCesAgent#disabled}

---

##### `proactiveExecutionEnabled`<sup>Optional</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If enabled, the callback will also be executed on intermediate model outputs.

This setting only affects after model callback.
**ENABLE WITH CAUTION**. Typically after model callback only needs to be
executed after receiving all model responses. Enabling proactive execution
may have negative implication on the execution cost and latency, and
should only be enabled in rare situations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#proactive_execution_enabled GoogleCesAgent#proactive_execution_enabled}

---

### GoogleCesAgentConfig <a name="GoogleCesAgentConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentConfig: googleCesAgent.GoogleCesAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.app">app</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.displayName">displayName</a></code> | <code>string</code> | Display name of the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterAgentCallbacks">afterAgentCallbacks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>[]</code> | after_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterModelCallbacks">afterModelCallbacks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>[]</code> | after_model_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterToolCallbacks">afterToolCallbacks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>[]</code> | after_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.agentId">agentId</a></code> | <code>string</code> | The ID to use for the agent, which will become the final component of the agent's resource name. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeAgentCallbacks">beforeAgentCallbacks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>[]</code> | before_agent_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeModelCallbacks">beforeModelCallbacks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>[]</code> | before_model_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeToolCallbacks">beforeToolCallbacks</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>[]</code> | before_tool_callbacks block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.childAgents">childAgents</a></code> | <code>string[]</code> | List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.description">description</a></code> | <code>string</code> | Human-readable description of the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.guardrails">guardrails</a></code> | <code>string[]</code> | List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.instruction">instruction</a></code> | <code>string</code> | Instructions for the LLM model to guide the agent's behavior. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.llmAgent">llmAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a></code> | llm_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a></code> | model_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#project GoogleCesAgent#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteA2AAgent">remoteA2AAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a></code> | remote_a2a_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteDialogflowAgent">remoteDialogflowAgent</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a></code> | remote_dialogflow_agent block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.tools">tools</a></code> | <code>string[]</code> | List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.toolsets">toolsets</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>[]</code> | toolsets block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.transferRules">transferRules</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>[]</code> | transfer_rules block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.app"></a>

```typescript
public readonly app: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#app GoogleCesAgent#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Display name of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#display_name GoogleCesAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#location GoogleCesAgent#location}

---

##### `afterAgentCallbacks`<sup>Optional</sup> <a name="afterAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterAgentCallbacks"></a>

```typescript
public readonly afterAgentCallbacks: IResolvable | GoogleCesAgentAfterAgentCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>[]

after_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_agent_callbacks GoogleCesAgent#after_agent_callbacks}

---

##### `afterModelCallbacks`<sup>Optional</sup> <a name="afterModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterModelCallbacks"></a>

```typescript
public readonly afterModelCallbacks: IResolvable | GoogleCesAgentAfterModelCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>[]

after_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_model_callbacks GoogleCesAgent#after_model_callbacks}

---

##### `afterToolCallbacks`<sup>Optional</sup> <a name="afterToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.afterToolCallbacks"></a>

```typescript
public readonly afterToolCallbacks: IResolvable | GoogleCesAgentAfterToolCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>[]

after_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#after_tool_callbacks GoogleCesAgent#after_tool_callbacks}

---

##### `agentId`<sup>Optional</sup> <a name="agentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

The ID to use for the agent, which will become the final component of the agent's resource name.

If not provided, a unique ID will be
automatically assigned for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_id GoogleCesAgent#agent_id}

---

##### `beforeAgentCallbacks`<sup>Optional</sup> <a name="beforeAgentCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeAgentCallbacks"></a>

```typescript
public readonly beforeAgentCallbacks: IResolvable | GoogleCesAgentBeforeAgentCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>[]

before_agent_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_agent_callbacks GoogleCesAgent#before_agent_callbacks}

---

##### `beforeModelCallbacks`<sup>Optional</sup> <a name="beforeModelCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeModelCallbacks"></a>

```typescript
public readonly beforeModelCallbacks: IResolvable | GoogleCesAgentBeforeModelCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>[]

before_model_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_model_callbacks GoogleCesAgent#before_model_callbacks}

---

##### `beforeToolCallbacks`<sup>Optional</sup> <a name="beforeToolCallbacks" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.beforeToolCallbacks"></a>

```typescript
public readonly beforeToolCallbacks: IResolvable | GoogleCesAgentBeforeToolCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>[]

before_tool_callbacks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#before_tool_callbacks GoogleCesAgent#before_tool_callbacks}

---

##### `childAgents`<sup>Optional</sup> <a name="childAgents" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.childAgents"></a>

```typescript
public readonly childAgents: string[];
```

- *Type:* string[]

List of child agents in the agent tree. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#child_agents GoogleCesAgent#child_agents}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#deletion_policy GoogleCesAgent#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human-readable description of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.guardrails"></a>

```typescript
public readonly guardrails: string[];
```

- *Type:* string[]

List of guardrails for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#guardrails GoogleCesAgent#guardrails}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.instruction"></a>

```typescript
public readonly instruction: string;
```

- *Type:* string

Instructions for the LLM model to guide the agent's behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#instruction GoogleCesAgent#instruction}

---

##### `llmAgent`<sup>Optional</sup> <a name="llmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.llmAgent"></a>

```typescript
public readonly llmAgent: GoogleCesAgentLlmAgent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

llm_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#llm_agent GoogleCesAgent#llm_agent}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.modelSettings"></a>

```typescript
public readonly modelSettings: GoogleCesAgentModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#model_settings GoogleCesAgent#model_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#project GoogleCesAgent#project}.

---

##### `remoteA2AAgent`<sup>Optional</sup> <a name="remoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteA2AAgent"></a>

```typescript
public readonly remoteA2AAgent: GoogleCesAgentRemoteA2AAgent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

remote_a2a_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#remote_a2a_agent GoogleCesAgent#remote_a2a_agent}

---

##### `remoteDialogflowAgent`<sup>Optional</sup> <a name="remoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.remoteDialogflowAgent"></a>

```typescript
public readonly remoteDialogflowAgent: GoogleCesAgentRemoteDialogflowAgent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

remote_dialogflow_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#remote_dialogflow_agent GoogleCesAgent#remote_dialogflow_agent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCesAgentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#timeouts GoogleCesAgent#timeouts}

---

##### `tools`<sup>Optional</sup> <a name="tools" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.tools"></a>

```typescript
public readonly tools: string[];
```

- *Type:* string[]

List of available tools for the agent. Format: 'projects/{project}/locations/{location}/apps/{app}/tools/{tool}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tools GoogleCesAgent#tools}

---

##### `toolsets`<sup>Optional</sup> <a name="toolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.toolsets"></a>

```typescript
public readonly toolsets: IResolvable | GoogleCesAgentToolsets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>[]

toolsets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#toolsets GoogleCesAgent#toolsets}

---

##### `transferRules`<sup>Optional</sup> <a name="transferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentConfig.property.transferRules"></a>

```typescript
public readonly transferRules: IResolvable | GoogleCesAgentTransferRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>[]

transfer_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#transfer_rules GoogleCesAgent#transfer_rules}

---

### GoogleCesAgentLlmAgent <a name="GoogleCesAgentLlmAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentLlmAgent: googleCesAgent.GoogleCesAgentLlmAgent = { ... }
```


### GoogleCesAgentModelSettings <a name="GoogleCesAgentModelSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentModelSettings: googleCesAgent.GoogleCesAgentModelSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.model">model</a></code> | <code>string</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.temperature">temperature</a></code> | <code>number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#model GoogleCesAgent#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#temperature GoogleCesAgent#temperature}

---

### GoogleCesAgentRemoteA2AAgent <a name="GoogleCesAgentRemoteA2AAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentRemoteA2AAgent: googleCesAgent.GoogleCesAgentRemoteA2AAgent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent.property.a2AConfig">a2AConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a></code> | a2a_config block. |

---

##### `a2AConfig`<sup>Required</sup> <a name="a2AConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent.property.a2AConfig"></a>

```typescript
public readonly a2AConfig: GoogleCesAgentRemoteA2AAgentA2AConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

a2a_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#a2a_config GoogleCesAgent#a2a_config}

---

### GoogleCesAgentRemoteA2AAgentA2AConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentRemoteA2AAgentA2AConfig: googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentCard">agentCard</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | agent_card block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentRegistry">agentRegistry</a></code> | <code>string</code> | Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | api_authentication block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.contextId">contextId</a></code> | <code>string</code> | If not empty, interactions with the remote A2A agent will use this context ID. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping">inputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | Mapping of input variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping">outputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | Mapping of output variable names of remote agent to GECX variable names. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled">streamingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether streaming is enabled for the remote agent. |

---

##### `agentCard`<sup>Optional</sup> <a name="agentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentCard"></a>

```typescript
public readonly agentCard: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

agent_card block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_card GoogleCesAgent#agent_card}

---

##### `agentRegistry`<sup>Optional</sup> <a name="agentRegistry" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.agentRegistry"></a>

```typescript
public readonly agentRegistry: string;
```

- *Type:* string

Reference to the agent in the Agent Registry. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent_registry GoogleCesAgent#agent_registry}

---

##### `apiAuthentication`<sup>Optional</sup> <a name="apiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.apiAuthentication"></a>

```typescript
public readonly apiAuthentication: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

api_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_authentication GoogleCesAgent#api_authentication}

---

##### `contextId`<sup>Optional</sup> <a name="contextId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.contextId"></a>

```typescript
public readonly contextId: string;
```

- *Type:* string

If not empty, interactions with the remote A2A agent will use this context ID.

This context_id field can refer to a session variable like
'$context.variables.order_agent_session_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#context_id GoogleCesAgent#context_id}

---

##### `inputVariableMapping`<sup>Optional</sup> <a name="inputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.inputVariableMapping"></a>

```typescript
public readonly inputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mapping of input variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#input_variable_mapping GoogleCesAgent#input_variable_mapping}

---

##### `outputVariableMapping`<sup>Optional</sup> <a name="outputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.outputVariableMapping"></a>

```typescript
public readonly outputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Mapping of output variable names of remote agent to GECX variable names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#output_variable_mapping GoogleCesAgent#output_variable_mapping}

---

##### `streamingEnabled`<sup>Optional</sup> <a name="streamingEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig.property.streamingEnabled"></a>

```typescript
public readonly streamingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether streaming is enabled for the remote agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#streaming_enabled GoogleCesAgent#streaming_enabled}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentRemoteA2AAgentA2AConfigAgentCard: googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.description">description</a></code> | <code>string</code> | A description of the agent's domain of action/solution space. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.name">name</a></code> | <code>string</code> | A human-readable name for the agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills">skills</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]</code> | skills block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces">supportedInterfaces</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]</code> | supported_interfaces block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.version">version</a></code> | <code>string</code> | The version of the agent. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description of the agent's domain of action/solution space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-readable name for the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#name GoogleCesAgent#name}

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.skills"></a>

```typescript
public readonly skills: IResolvable | GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]

skills block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#skills GoogleCesAgent#skills}

---

##### `supportedInterfaces`<sup>Required</sup> <a name="supportedInterfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.supportedInterfaces"></a>

```typescript
public readonly supportedInterfaces: IResolvable | GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]

supported_interfaces block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#supported_interfaces GoogleCesAgent#supported_interfaces}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The version of the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#version GoogleCesAgent#version}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills: googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description">description</a></code> | <code>string</code> | A detailed description of the skill. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id">id</a></code> | <code>string</code> | A unique identifier for the agent's skill. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name">name</a></code> | <code>string</code> | A human-readable name for the skill. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags">tags</a></code> | <code>string[]</code> | A set of keywords describing the skill's capabilities. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples">examples</a></code> | <code>string[]</code> | Example prompts or scenarios that this skill can handle. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes">inputModes</a></code> | <code>string[]</code> | The set of supported input media types for this skill, overriding the agent's defaults. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes">outputModes</a></code> | <code>string[]</code> | The set of supported output media types for this skill, overriding the agent's defaults. |

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A detailed description of the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#description GoogleCesAgent#description}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

A unique identifier for the agent's skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#id GoogleCesAgent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A human-readable name for the skill.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#name GoogleCesAgent#name}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

A set of keywords describing the skill's capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tags GoogleCesAgent#tags}

---

##### `examples`<sup>Optional</sup> <a name="examples" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.examples"></a>

```typescript
public readonly examples: string[];
```

- *Type:* string[]

Example prompts or scenarios that this skill can handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#examples GoogleCesAgent#examples}

---

##### `inputModes`<sup>Optional</sup> <a name="inputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.inputModes"></a>

```typescript
public readonly inputModes: string[];
```

- *Type:* string[]

The set of supported input media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#input_modes GoogleCesAgent#input_modes}

---

##### `outputModes`<sup>Optional</sup> <a name="outputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills.property.outputModes"></a>

```typescript
public readonly outputModes: string[];
```

- *Type:* string[]

The set of supported output media types for this skill, overriding the agent's defaults.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#output_modes GoogleCesAgent#output_modes}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces: googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding">protocolBinding</a></code> | <code>string</code> | The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0". |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url">url</a></code> | <code>string</code> | The URL where this interface is available. Must be a valid absolute HTTPS URL in production. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant">tenant</a></code> | <code>string</code> | Tenant ID to be used in the request when calling the agent. |

---

##### `protocolBinding`<sup>Required</sup> <a name="protocolBinding" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolBinding"></a>

```typescript
public readonly protocolBinding: string;
```

- *Type:* string

The protocol binding supported at this URL. The core ones officially supported are JSONRPC, GRPC and HTTP+JSON.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#protocol_binding GoogleCesAgent#protocol_binding}

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

The version of the A2A protocol this interface exposes. Examples: "0.3", "1.0".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#protocol_version GoogleCesAgent#protocol_version}

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL where this interface is available. Must be a valid absolute HTTPS URL in production.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#url GoogleCesAgent#url}

---

##### `tenant`<sup>Optional</sup> <a name="tenant" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

Tenant ID to be used in the request when calling the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tenant GoogleCesAgent#tenant}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentRemoteA2AAgentA2AConfigApiAuthentication: googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | service_account_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_key_config GoogleCesAgent#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#bearer_token_config GoogleCesAgent#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#oauth_config GoogleCesAgent#oauth_config}

---

##### `serviceAccountAuthConfig`<sup>Optional</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication.property.serviceAccountAuthConfig"></a>

```typescript
public readonly serviceAccountAuthConfig: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

service_account_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#service_account_auth_config GoogleCesAgent#service_account_auth_config}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig: googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>string</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>string</code> | Key location in the request. Possible values: HEADER QUERY_STRING. |

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.apiKeySecretVersion"></a>

```typescript
public readonly apiKeySecretVersion: string;
```

- *Type:* string

The name of the SecretManager secret version resource storing the API key.

Format: 'projects/{project}/secrets/{secret}/versions/{version}'
Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#api_key_secret_version GoogleCesAgent#api_key_secret_version}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#key_name GoogleCesAgent#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

Key location in the request. Possible values: HEADER QUERY_STRING.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#request_location GoogleCesAgent#request_location}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig: googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>string</code> | The bearer token. Must be in the format '$context.variables.<name_of_variable>'. |

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

The bearer token. Must be in the format '$context.variables.<name_of_variable>'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#token GoogleCesAgent#token}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig: googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>string</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion">clientSecretVersion</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | OAuth grant types. Possible values: CLIENT_CREDENTIAL. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#client_id GoogleCesAgent#client_id}

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.clientSecretVersion"></a>

```typescript
public readonly clientSecretVersion: string;
```

- *Type:* string

The name of the SecretManager secret version resource storing the client secret. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Note: You should grant 'roles/secretmanager.secretAccessor' role to the CES
service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#client_secret_version GoogleCesAgent#client_secret_version}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

OAuth grant types. Possible values: CLIENT_CREDENTIAL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#oauth_grant_type GoogleCesAgent#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#token_endpoint GoogleCesAgent#token_endpoint}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#scopes GoogleCesAgent#scopes}

---

### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig: googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The email address of the service account used for authenticatation. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.scopes">scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used. |

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The email address of the service account used for authenticatation.

CES
uses this service account to exchange an access token and the access token
is then sent in the 'Authorization' header of the request.

The service account must have the
'roles/iam.serviceAccountTokenCreator' role granted to the
CES service agent
'service-@gcp-sa-ces.iam.gserviceaccount.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#service_account GoogleCesAgent#service_account}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

The OAuth scopes to grant. If not specified, the default scope 'https://www.googleapis.com/auth/cloud-platform' is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#scopes GoogleCesAgent#scopes}

---

### GoogleCesAgentRemoteDialogflowAgent <a name="GoogleCesAgentRemoteDialogflowAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentRemoteDialogflowAgent: googleCesAgent.GoogleCesAgentRemoteDialogflowAgent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.agent">agent</a></code> | <code>string</code> | The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.flowId">flowId</a></code> | <code>string</code> | The flow ID of the flow in the Dialogflow agent. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.environmentId">environmentId</a></code> | <code>string</code> | The environment ID of the Dialogflow agent be used for the agent execution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.inputVariableMapping">inputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.languageCodeVariable">languageCodeVariable</a></code> | <code>string</code> | The name of the variable that contains the language code to be used for the Dialogflow session. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.outputVariableMapping">outputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings">respectResponseInterruptionSettings</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent. |

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.agent"></a>

```typescript
public readonly agent: string;
```

- *Type:* string

The [Dialogflow](https://cloud.google.com/dialogflow/cx/docs/concept/console-conversational-agents agent resource name. Format: 'projects/{project}/locations/{location}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#agent GoogleCesAgent#agent}

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

The flow ID of the flow in the Dialogflow agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#flow_id GoogleCesAgent#flow_id}

---

##### `environmentId`<sup>Optional</sup> <a name="environmentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

The environment ID of the Dialogflow agent be used for the agent execution.

If not specified, the draft environment will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#environment_id GoogleCesAgent#environment_id}

---

##### `inputVariableMapping`<sup>Optional</sup> <a name="inputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.inputVariableMapping"></a>

```typescript
public readonly inputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The mapping of the app variables names to the Dialogflow session parameters names to be sent to the Dialogflow agent as input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#input_variable_mapping GoogleCesAgent#input_variable_mapping}

---

##### `languageCodeVariable`<sup>Optional</sup> <a name="languageCodeVariable" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.languageCodeVariable"></a>

```typescript
public readonly languageCodeVariable: string;
```

- *Type:* string

The name of the variable that contains the language code to be used for the Dialogflow session.

If unspecified, the default language code of the
Dialogflow agent will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#language_code_variable GoogleCesAgent#language_code_variable}

---

##### `outputVariableMapping`<sup>Optional</sup> <a name="outputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.outputVariableMapping"></a>

```typescript
public readonly outputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The mapping of the Dialogflow session parameters names to the app variables names to be sent back to the CES agent after the Dialogflow agent execution ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#output_variable_mapping GoogleCesAgent#output_variable_mapping}

---

##### `respectResponseInterruptionSettings`<sup>Optional</sup> <a name="respectResponseInterruptionSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent.property.respectResponseInterruptionSettings"></a>

```typescript
public readonly respectResponseInterruptionSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to respect the message-level interruption settings configured in the Dialogflow agent.

* If false: all response messages from the Dialogflow agent follow the app-level barge-in settings. * If true: only response messages with ['allow_playback_interruption'](https://docs.cloud.google.com/dialogflow/cx/docs/reference/rpc/google.cloud.dialogflow.cx.v3#text) set to true will be interruptable, all other messages follow the app-level barge-in settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#respect_response_interruption_settings GoogleCesAgent#respect_response_interruption_settings}

---

### GoogleCesAgentTimeouts <a name="GoogleCesAgentTimeouts" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentTimeouts: googleCesAgent.GoogleCesAgentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#create GoogleCesAgent#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#delete GoogleCesAgent#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#update GoogleCesAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#create GoogleCesAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#delete GoogleCesAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#update GoogleCesAgent#update}.

---

### GoogleCesAgentToolsets <a name="GoogleCesAgentToolsets" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentToolsets: googleCesAgent.GoogleCesAgentToolsets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolset">toolset</a></code> | <code>string</code> | The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolIds">toolIds</a></code> | <code>string[]</code> | The tools IDs to filter the toolset. |

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

The resource name of the toolset. Format: 'projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#toolset GoogleCesAgent#toolset}

---

##### `toolIds`<sup>Optional</sup> <a name="toolIds" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets.property.toolIds"></a>

```typescript
public readonly toolIds: string[];
```

- *Type:* string[]

The tools IDs to filter the toolset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#tool_ids GoogleCesAgent#tool_ids}

---

### GoogleCesAgentTransferRules <a name="GoogleCesAgentTransferRules" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentTransferRules: googleCesAgent.GoogleCesAgentTransferRules = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.childAgent">childAgent</a></code> | <code>string</code> | The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.direction">direction</a></code> | <code>string</code> | The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"]. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.deterministicTransfer">deterministicTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a></code> | deterministic_transfer block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.disablePlannerTransfer">disablePlannerTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a></code> | disable_planner_transfer block. |

---

##### `childAgent`<sup>Required</sup> <a name="childAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.childAgent"></a>

```typescript
public readonly childAgent: string;
```

- *Type:* string

The resource name of the child agent the rule applies to. Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#child_agent GoogleCesAgent#child_agent}

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

The direction of the transfer. Possible values: ["PARENT_TO_CHILD", "CHILD_TO_PARENT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#direction GoogleCesAgent#direction}

---

##### `deterministicTransfer`<sup>Optional</sup> <a name="deterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.deterministicTransfer"></a>

```typescript
public readonly deterministicTransfer: GoogleCesAgentTransferRulesDeterministicTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

deterministic_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#deterministic_transfer GoogleCesAgent#deterministic_transfer}

---

##### `disablePlannerTransfer`<sup>Optional</sup> <a name="disablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules.property.disablePlannerTransfer"></a>

```typescript
public readonly disablePlannerTransfer: GoogleCesAgentTransferRulesDisablePlannerTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

disable_planner_transfer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#disable_planner_transfer GoogleCesAgent#disable_planner_transfer}

---

### GoogleCesAgentTransferRulesDeterministicTransfer <a name="GoogleCesAgentTransferRulesDeterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentTransferRulesDeterministicTransfer: googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | expression_condition block. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition">pythonCodeCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | python_code_condition block. |

---

##### `expressionCondition`<sup>Optional</sup> <a name="expressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.expressionCondition"></a>

```typescript
public readonly expressionCondition: GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression_condition GoogleCesAgent#expression_condition}

---

##### `pythonCodeCondition`<sup>Optional</sup> <a name="pythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer.property.pythonCodeCondition"></a>

```typescript
public readonly pythonCodeCondition: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

python_code_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code_condition GoogleCesAgent#python_code_condition}

---

### GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition <a name="GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentTransferRulesDeterministicTransferExpressionCondition: googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression">expression</a></code> | <code>string</code> | The string representation of cloud.api.Expression condition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression GoogleCesAgent#expression}

---

### GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition <a name="GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentTransferRulesDeterministicTransferPythonCodeCondition: googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode">pythonCode</a></code> | <code>string</code> | The python code to execute. The function must be named 'should_trigger_transfer_callback'. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

The python code to execute. The function must be named 'should_trigger_transfer_callback'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#python_code GoogleCesAgent#python_code}

---

### GoogleCesAgentTransferRulesDisablePlannerTransfer <a name="GoogleCesAgentTransferRulesDisablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentTransferRulesDisablePlannerTransfer: googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | expression_condition block. |

---

##### `expressionCondition`<sup>Required</sup> <a name="expressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer.property.expressionCondition"></a>

```typescript
public readonly expressionCondition: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

expression_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression_condition GoogleCesAgent#expression_condition}

---

### GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition <a name="GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

const googleCesAgentTransferRulesDisablePlannerTransferExpressionCondition: googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression">expression</a></code> | <code>string</code> | The string representation of cloud.api.Expression condition. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The string representation of cloud.api.Expression condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/8.6.0/docs/resources/google_ces_agent#expression GoogleCesAgent#expression}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCesAgentAfterAgentCallbacksList <a name="GoogleCesAgentAfterAgentCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentAfterAgentCallbacksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.get"></a>

```typescript
public get(index: number): GoogleCesAgentAfterAgentCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentAfterAgentCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>[]

---


### GoogleCesAgentAfterAgentCallbacksOutputReference <a name="GoogleCesAgentAfterAgentCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```typescript
public resetProactiveExecutionEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```typescript
public readonly proactiveExecutionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentAfterAgentCallbacks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterAgentCallbacks">GoogleCesAgentAfterAgentCallbacks</a>

---


### GoogleCesAgentAfterModelCallbacksList <a name="GoogleCesAgentAfterModelCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentAfterModelCallbacksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.get"></a>

```typescript
public get(index: number): GoogleCesAgentAfterModelCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentAfterModelCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>[]

---


### GoogleCesAgentAfterModelCallbacksOutputReference <a name="GoogleCesAgentAfterModelCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```typescript
public resetProactiveExecutionEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```typescript
public readonly proactiveExecutionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentAfterModelCallbacks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterModelCallbacks">GoogleCesAgentAfterModelCallbacks</a>

---


### GoogleCesAgentAfterToolCallbacksList <a name="GoogleCesAgentAfterToolCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentAfterToolCallbacksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.get"></a>

```typescript
public get(index: number): GoogleCesAgentAfterToolCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentAfterToolCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>[]

---


### GoogleCesAgentAfterToolCallbacksOutputReference <a name="GoogleCesAgentAfterToolCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```typescript
public resetProactiveExecutionEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```typescript
public readonly proactiveExecutionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentAfterToolCallbacks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentAfterToolCallbacks">GoogleCesAgentAfterToolCallbacks</a>

---


### GoogleCesAgentBeforeAgentCallbacksList <a name="GoogleCesAgentBeforeAgentCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.get"></a>

```typescript
public get(index: number): GoogleCesAgentBeforeAgentCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentBeforeAgentCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>[]

---


### GoogleCesAgentBeforeAgentCallbacksOutputReference <a name="GoogleCesAgentBeforeAgentCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```typescript
public resetProactiveExecutionEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```typescript
public readonly proactiveExecutionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentBeforeAgentCallbacks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeAgentCallbacks">GoogleCesAgentBeforeAgentCallbacks</a>

---


### GoogleCesAgentBeforeModelCallbacksList <a name="GoogleCesAgentBeforeModelCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentBeforeModelCallbacksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.get"></a>

```typescript
public get(index: number): GoogleCesAgentBeforeModelCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentBeforeModelCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>[]

---


### GoogleCesAgentBeforeModelCallbacksOutputReference <a name="GoogleCesAgentBeforeModelCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```typescript
public resetProactiveExecutionEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```typescript
public readonly proactiveExecutionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentBeforeModelCallbacks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeModelCallbacks">GoogleCesAgentBeforeModelCallbacks</a>

---


### GoogleCesAgentBeforeToolCallbacksList <a name="GoogleCesAgentBeforeToolCallbacksList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentBeforeToolCallbacksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.get"></a>

```typescript
public get(index: number): GoogleCesAgentBeforeToolCallbacksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentBeforeToolCallbacks[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>[]

---


### GoogleCesAgentBeforeToolCallbacksOutputReference <a name="GoogleCesAgentBeforeToolCallbacksOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled">resetProactiveExecutionEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetDisabled"></a>

```typescript
public resetDisabled(): void
```

##### `resetProactiveExecutionEnabled` <a name="resetProactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.resetProactiveExecutionEnabled"></a>

```typescript
public resetProactiveExecutionEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabledInput">disabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput">proactiveExecutionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabled">disabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled">proactiveExecutionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabledInput"></a>

```typescript
public readonly disabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabledInput`<sup>Optional</sup> <a name="proactiveExecutionEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabledInput"></a>

```typescript
public readonly proactiveExecutionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.disabled"></a>

```typescript
public readonly disabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `proactiveExecutionEnabled`<sup>Required</sup> <a name="proactiveExecutionEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.proactiveExecutionEnabled"></a>

```typescript
public readonly proactiveExecutionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentBeforeToolCallbacks;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentBeforeToolCallbacks">GoogleCesAgentBeforeToolCallbacks</a>

---


### GoogleCesAgentLlmAgentOutputReference <a name="GoogleCesAgentLlmAgentOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentLlmAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentLlmAgent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentLlmAgent">GoogleCesAgentLlmAgent</a>

---


### GoogleCesAgentModelSettingsOutputReference <a name="GoogleCesAgentModelSettingsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentModelSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.resetTemperature"></a>

```typescript
public resetTemperature(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperatureInput"></a>

```typescript
public readonly temperatureInput: number;
```

- *Type:* number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.temperature"></a>

```typescript
public readonly temperature: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentModelSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentModelSettings">GoogleCesAgentModelSettings</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills">putSkills</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces">putSupportedInterfaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSkills` <a name="putSkills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills"></a>

```typescript
public putSkills(value: IResolvable | GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSkills.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]

---

##### `putSupportedInterfaces` <a name="putSupportedInterfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces"></a>

```typescript
public putSupportedInterfaces(value: IResolvable | GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.putSupportedInterfaces.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills">skills</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces">supportedInterfaces</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput">skillsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput">supportedInterfacesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `skills`<sup>Required</sup> <a name="skills" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skills"></a>

```typescript
public readonly skills: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList</a>

---

##### `supportedInterfaces`<sup>Required</sup> <a name="supportedInterfaces" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfaces"></a>

```typescript
public readonly supportedInterfaces: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `skillsInput`<sup>Optional</sup> <a name="skillsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.skillsInput"></a>

```typescript
public readonly skillsInput: IResolvable | GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]

---

##### `supportedInterfacesInput`<sup>Optional</sup> <a name="supportedInterfacesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.supportedInterfacesInput"></a>

```typescript
public readonly supportedInterfacesInput: IResolvable | GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get"></a>

```typescript
public get(index: number): GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>[]

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples">resetExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes">resetInputModes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes">resetOutputModes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExamples` <a name="resetExamples" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetExamples"></a>

```typescript
public resetExamples(): void
```

##### `resetInputModes` <a name="resetInputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetInputModes"></a>

```typescript
public resetInputModes(): void
```

##### `resetOutputModes` <a name="resetOutputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.resetOutputModes"></a>

```typescript
public resetOutputModes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput">examplesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput">inputModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput">outputModesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples">examples</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes">inputModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes">outputModes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `examplesInput`<sup>Optional</sup> <a name="examplesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examplesInput"></a>

```typescript
public readonly examplesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputModesInput`<sup>Optional</sup> <a name="inputModesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModesInput"></a>

```typescript
public readonly inputModesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputModesInput`<sup>Optional</sup> <a name="outputModesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModesInput"></a>

```typescript
public readonly outputModesInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `examples`<sup>Required</sup> <a name="examples" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.examples"></a>

```typescript
public readonly examples: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputModes`<sup>Required</sup> <a name="inputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.inputModes"></a>

```typescript
public readonly inputModes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputModes`<sup>Required</sup> <a name="outputModes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.outputModes"></a>

```typescript
public readonly outputModes: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkillsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSkills</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get"></a>

```typescript
public get(index: number): GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>[]

---


### GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant">resetTenant</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTenant` <a name="resetTenant" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.resetTenant"></a>

```typescript
public resetTenant(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput">protocolBindingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput">protocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput">tenantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding">protocolBinding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion">protocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant">tenant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `protocolBindingInput`<sup>Optional</sup> <a name="protocolBindingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBindingInput"></a>

```typescript
public readonly protocolBindingInput: string;
```

- *Type:* string

---

##### `protocolVersionInput`<sup>Optional</sup> <a name="protocolVersionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersionInput"></a>

```typescript
public readonly protocolVersionInput: string;
```

- *Type:* string

---

##### `tenantInput`<sup>Optional</sup> <a name="tenantInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenantInput"></a>

```typescript
public readonly tenantInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `protocolBinding`<sup>Required</sup> <a name="protocolBinding" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolBinding"></a>

```typescript
public readonly protocolBinding: string;
```

- *Type:* string

---

##### `protocolVersion`<sup>Required</sup> <a name="protocolVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.protocolVersion"></a>

```typescript
public readonly protocolVersion: string;
```

- *Type:* string

---

##### `tenant`<sup>Required</sup> <a name="tenant" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.tenant"></a>

```typescript
public readonly tenant: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardSupportedInterfaces</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput">apiKeySecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion">apiKeySecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeySecretVersionInput`<sup>Optional</sup> <a name="apiKeySecretVersionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersionInput"></a>

```typescript
public readonly apiKeySecretVersionInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```typescript
public readonly requestLocationInput: string;
```

- *Type:* string

---

##### `apiKeySecretVersion`<sup>Required</sup> <a name="apiKeySecretVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.apiKeySecretVersion"></a>

```typescript
public readonly apiKeySecretVersion: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```typescript
public readonly requestLocation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput">clientSecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion">clientSecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretVersionInput`<sup>Optional</sup> <a name="clientSecretVersionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersionInput"></a>

```typescript
public readonly clientSecretVersionInput: string;
```

- *Type:* string

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```typescript
public readonly oauthGrantTypeInput: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecretVersion`<sup>Required</sup> <a name="clientSecretVersion" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.clientSecretVersion"></a>

```typescript
public readonly clientSecretVersion: string;
```

- *Type:* string

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```typescript
public readonly oauthGrantType: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig">putServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig">resetServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig"></a>

```typescript
public putApiKeyConfig(value: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig"></a>

```typescript
public putBearerTokenConfig(value: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig"></a>

```typescript
public putOauthConfig(value: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---

##### `putServiceAccountAuthConfig` <a name="putServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig"></a>

```typescript
public putServiceAccountAuthConfig(value: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.putServiceAccountAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetApiKeyConfig"></a>

```typescript
public resetApiKeyConfig(): void
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetBearerTokenConfig"></a>

```typescript
public resetBearerTokenConfig(): void
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetOauthConfig"></a>

```typescript
public resetOauthConfig(): void
```

##### `resetServiceAccountAuthConfig` <a name="resetServiceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.resetServiceAccountAuthConfig"></a>

```typescript
public resetServiceAccountAuthConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig">serviceAccountAuthConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput">serviceAccountAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfig"></a>

```typescript
public readonly apiKeyConfig: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfig"></a>

```typescript
public readonly bearerTokenConfig: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfig"></a>

```typescript
public readonly oauthConfig: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAccountAuthConfig`<sup>Required</sup> <a name="serviceAccountAuthConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfig"></a>

```typescript
public readonly serviceAccountAuthConfig: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```typescript
public readonly apiKeyConfigInput: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```typescript
public readonly bearerTokenConfigInput: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.oauthConfigInput"></a>

```typescript
public readonly oauthConfigInput: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOauthConfig</a>

---

##### `serviceAccountAuthConfigInput`<sup>Optional</sup> <a name="serviceAccountAuthConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.serviceAccountAuthConfigInput"></a>

```typescript
public readonly serviceAccountAuthConfigInput: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.resetScopes"></a>

```typescript
public resetScopes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes">scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopesInput"></a>

```typescript
public readonly scopesInput: string[];
```

- *Type:* string[]

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.scopes"></a>

```typescript
public readonly scopes: string[];
```

- *Type:* string[]

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationServiceAccountAuthConfig</a>

---


### GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference <a name="GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard">putAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication">putApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard">resetAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry">resetAgentRegistry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication">resetApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId">resetContextId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping">resetInputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping">resetOutputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled">resetStreamingEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentCard` <a name="putAgentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard"></a>

```typescript
public putAgentCard(value: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putAgentCard.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---

##### `putApiAuthentication` <a name="putApiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication"></a>

```typescript
public putApiAuthentication(value: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.putApiAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---

##### `resetAgentCard` <a name="resetAgentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentCard"></a>

```typescript
public resetAgentCard(): void
```

##### `resetAgentRegistry` <a name="resetAgentRegistry" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetAgentRegistry"></a>

```typescript
public resetAgentRegistry(): void
```

##### `resetApiAuthentication` <a name="resetApiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetApiAuthentication"></a>

```typescript
public resetApiAuthentication(): void
```

##### `resetContextId` <a name="resetContextId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetContextId"></a>

```typescript
public resetContextId(): void
```

##### `resetInputVariableMapping` <a name="resetInputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetInputVariableMapping"></a>

```typescript
public resetInputVariableMapping(): void
```

##### `resetOutputVariableMapping` <a name="resetOutputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetOutputVariableMapping"></a>

```typescript
public resetOutputVariableMapping(): void
```

##### `resetStreamingEnabled` <a name="resetStreamingEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.resetStreamingEnabled"></a>

```typescript
public resetStreamingEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard">agentCard</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication">apiAuthentication</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput">agentCardInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput">agentRegistryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput">apiAuthenticationInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput">contextIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput">inputVariableMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput">outputVariableMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput">streamingEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry">agentRegistry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId">contextId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping">inputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping">outputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled">streamingEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentCard`<sup>Required</sup> <a name="agentCard" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCard"></a>

```typescript
public readonly agentCard: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCardOutputReference</a>

---

##### `apiAuthentication`<sup>Required</sup> <a name="apiAuthentication" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthentication"></a>

```typescript
public readonly apiAuthentication: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthenticationOutputReference</a>

---

##### `agentCardInput`<sup>Optional</sup> <a name="agentCardInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentCardInput"></a>

```typescript
public readonly agentCardInput: GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard">GoogleCesAgentRemoteA2AAgentA2AConfigAgentCard</a>

---

##### `agentRegistryInput`<sup>Optional</sup> <a name="agentRegistryInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistryInput"></a>

```typescript
public readonly agentRegistryInput: string;
```

- *Type:* string

---

##### `apiAuthenticationInput`<sup>Optional</sup> <a name="apiAuthenticationInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.apiAuthenticationInput"></a>

```typescript
public readonly apiAuthenticationInput: GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication">GoogleCesAgentRemoteA2AAgentA2AConfigApiAuthentication</a>

---

##### `contextIdInput`<sup>Optional</sup> <a name="contextIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextIdInput"></a>

```typescript
public readonly contextIdInput: string;
```

- *Type:* string

---

##### `inputVariableMappingInput`<sup>Optional</sup> <a name="inputVariableMappingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMappingInput"></a>

```typescript
public readonly inputVariableMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `outputVariableMappingInput`<sup>Optional</sup> <a name="outputVariableMappingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMappingInput"></a>

```typescript
public readonly outputVariableMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `streamingEnabledInput`<sup>Optional</sup> <a name="streamingEnabledInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabledInput"></a>

```typescript
public readonly streamingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `agentRegistry`<sup>Required</sup> <a name="agentRegistry" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.agentRegistry"></a>

```typescript
public readonly agentRegistry: string;
```

- *Type:* string

---

##### `contextId`<sup>Required</sup> <a name="contextId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.contextId"></a>

```typescript
public readonly contextId: string;
```

- *Type:* string

---

##### `inputVariableMapping`<sup>Required</sup> <a name="inputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.inputVariableMapping"></a>

```typescript
public readonly inputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `outputVariableMapping`<sup>Required</sup> <a name="outputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.outputVariableMapping"></a>

```typescript
public readonly outputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `streamingEnabled`<sup>Required</sup> <a name="streamingEnabled" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.streamingEnabled"></a>

```typescript
public readonly streamingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentRemoteA2AAgentA2AConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

---


### GoogleCesAgentRemoteA2AAgentOutputReference <a name="GoogleCesAgentRemoteA2AAgentOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig">putA2AConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putA2AConfig` <a name="putA2AConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig"></a>

```typescript
public putA2AConfig(value: GoogleCesAgentRemoteA2AAgentA2AConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.putA2AConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfig">a2AConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput">a2AConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `a2AConfig`<sup>Required</sup> <a name="a2AConfig" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfig"></a>

```typescript
public readonly a2AConfig: GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference">GoogleCesAgentRemoteA2AAgentA2AConfigOutputReference</a>

---

##### `a2AConfigInput`<sup>Optional</sup> <a name="a2AConfigInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.a2AConfigInput"></a>

```typescript
public readonly a2AConfigInput: GoogleCesAgentRemoteA2AAgentA2AConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentA2AConfig">GoogleCesAgentRemoteA2AAgentA2AConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentRemoteA2AAgent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteA2AAgent">GoogleCesAgentRemoteA2AAgent</a>

---


### GoogleCesAgentRemoteDialogflowAgentOutputReference <a name="GoogleCesAgentRemoteDialogflowAgentOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId">resetEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping">resetInputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable">resetLanguageCodeVariable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping">resetOutputVariableMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings">resetRespectResponseInterruptionSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnvironmentId` <a name="resetEnvironmentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetEnvironmentId"></a>

```typescript
public resetEnvironmentId(): void
```

##### `resetInputVariableMapping` <a name="resetInputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetInputVariableMapping"></a>

```typescript
public resetInputVariableMapping(): void
```

##### `resetLanguageCodeVariable` <a name="resetLanguageCodeVariable" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetLanguageCodeVariable"></a>

```typescript
public resetLanguageCodeVariable(): void
```

##### `resetOutputVariableMapping` <a name="resetOutputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetOutputVariableMapping"></a>

```typescript
public resetOutputVariableMapping(): void
```

##### `resetRespectResponseInterruptionSettings` <a name="resetRespectResponseInterruptionSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.resetRespectResponseInterruptionSettings"></a>

```typescript
public resetRespectResponseInterruptionSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agentInput">agentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput">environmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput">flowIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput">inputVariableMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput">languageCodeVariableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput">outputVariableMappingInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput">respectResponseInterruptionSettingsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agent">agent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentId">environmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowId">flowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping">inputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable">languageCodeVariable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping">outputVariableMapping</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings">respectResponseInterruptionSettings</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agentInput"></a>

```typescript
public readonly agentInput: string;
```

- *Type:* string

---

##### `environmentIdInput`<sup>Optional</sup> <a name="environmentIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentIdInput"></a>

```typescript
public readonly environmentIdInput: string;
```

- *Type:* string

---

##### `flowIdInput`<sup>Optional</sup> <a name="flowIdInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowIdInput"></a>

```typescript
public readonly flowIdInput: string;
```

- *Type:* string

---

##### `inputVariableMappingInput`<sup>Optional</sup> <a name="inputVariableMappingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMappingInput"></a>

```typescript
public readonly inputVariableMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `languageCodeVariableInput`<sup>Optional</sup> <a name="languageCodeVariableInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariableInput"></a>

```typescript
public readonly languageCodeVariableInput: string;
```

- *Type:* string

---

##### `outputVariableMappingInput`<sup>Optional</sup> <a name="outputVariableMappingInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMappingInput"></a>

```typescript
public readonly outputVariableMappingInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `respectResponseInterruptionSettingsInput`<sup>Optional</sup> <a name="respectResponseInterruptionSettingsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettingsInput"></a>

```typescript
public readonly respectResponseInterruptionSettingsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.agent"></a>

```typescript
public readonly agent: string;
```

- *Type:* string

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.environmentId"></a>

```typescript
public readonly environmentId: string;
```

- *Type:* string

---

##### `flowId`<sup>Required</sup> <a name="flowId" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.flowId"></a>

```typescript
public readonly flowId: string;
```

- *Type:* string

---

##### `inputVariableMapping`<sup>Required</sup> <a name="inputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.inputVariableMapping"></a>

```typescript
public readonly inputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `languageCodeVariable`<sup>Required</sup> <a name="languageCodeVariable" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.languageCodeVariable"></a>

```typescript
public readonly languageCodeVariable: string;
```

- *Type:* string

---

##### `outputVariableMapping`<sup>Required</sup> <a name="outputVariableMapping" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.outputVariableMapping"></a>

```typescript
public readonly outputVariableMapping: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `respectResponseInterruptionSettings`<sup>Required</sup> <a name="respectResponseInterruptionSettings" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.respectResponseInterruptionSettings"></a>

```typescript
public readonly respectResponseInterruptionSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentRemoteDialogflowAgent;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentRemoteDialogflowAgent">GoogleCesAgentRemoteDialogflowAgent</a>

---


### GoogleCesAgentTimeoutsOutputReference <a name="GoogleCesAgentTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTimeouts">GoogleCesAgentTimeouts</a>

---


### GoogleCesAgentToolsetsList <a name="GoogleCesAgentToolsetsList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentToolsetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.get"></a>

```typescript
public get(index: number): GoogleCesAgentToolsetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentToolsets[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>[]

---


### GoogleCesAgentToolsetsOutputReference <a name="GoogleCesAgentToolsetsOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentToolsetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resetToolIds">resetToolIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetToolIds` <a name="resetToolIds" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.resetToolIds"></a>

```typescript
public resetToolIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIdsInput">toolIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolsetInput">toolsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIds">toolIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolset">toolset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `toolIdsInput`<sup>Optional</sup> <a name="toolIdsInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIdsInput"></a>

```typescript
public readonly toolIdsInput: string[];
```

- *Type:* string[]

---

##### `toolsetInput`<sup>Optional</sup> <a name="toolsetInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolsetInput"></a>

```typescript
public readonly toolsetInput: string;
```

- *Type:* string

---

##### `toolIds`<sup>Required</sup> <a name="toolIds" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolIds"></a>

```typescript
public readonly toolIds: string[];
```

- *Type:* string[]

---

##### `toolset`<sup>Required</sup> <a name="toolset" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.toolset"></a>

```typescript
public readonly toolset: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentToolsets;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentToolsets">GoogleCesAgentToolsets</a>

---


### GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference <a name="GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---


### GoogleCesAgentTransferRulesDeterministicTransferOutputReference <a name="GoogleCesAgentTransferRulesDeterministicTransferOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition">putExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition">putPythonCodeCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition">resetExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition">resetPythonCodeCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpressionCondition` <a name="putExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition"></a>

```typescript
public putExpressionCondition(value: GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putExpressionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---

##### `putPythonCodeCondition` <a name="putPythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition"></a>

```typescript
public putPythonCodeCondition(value: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.putPythonCodeCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---

##### `resetExpressionCondition` <a name="resetExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetExpressionCondition"></a>

```typescript
public resetExpressionCondition(): void
```

##### `resetPythonCodeCondition` <a name="resetPythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.resetPythonCodeCondition"></a>

```typescript
public resetPythonCodeCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition">pythonCodeCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput">expressionConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput">pythonCodeConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionCondition`<sup>Required</sup> <a name="expressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionCondition"></a>

```typescript
public readonly expressionCondition: GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferExpressionConditionOutputReference</a>

---

##### `pythonCodeCondition`<sup>Required</sup> <a name="pythonCodeCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeCondition"></a>

```typescript
public readonly pythonCodeCondition: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference</a>

---

##### `expressionConditionInput`<sup>Optional</sup> <a name="expressionConditionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.expressionConditionInput"></a>

```typescript
public readonly expressionConditionInput: GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition">GoogleCesAgentTransferRulesDeterministicTransferExpressionCondition</a>

---

##### `pythonCodeConditionInput`<sup>Optional</sup> <a name="pythonCodeConditionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.pythonCodeConditionInput"></a>

```typescript
public readonly pythonCodeConditionInput: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentTransferRulesDeterministicTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

---


### GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference <a name="GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode">pythonCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCodeInput"></a>

```typescript
public readonly pythonCodeInput: string;
```

- *Type:* string

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.pythonCode"></a>

```typescript
public readonly pythonCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition">GoogleCesAgentTransferRulesDeterministicTransferPythonCodeCondition</a>

---


### GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference <a name="GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---


### GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference <a name="GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition">putExpressionCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpressionCondition` <a name="putExpressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition"></a>

```typescript
public putExpressionCondition(value: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.putExpressionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition">expressionCondition</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput">expressionConditionInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expressionCondition`<sup>Required</sup> <a name="expressionCondition" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionCondition"></a>

```typescript
public readonly expressionCondition: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionConditionOutputReference</a>

---

##### `expressionConditionInput`<sup>Optional</sup> <a name="expressionConditionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.expressionConditionInput"></a>

```typescript
public readonly expressionConditionInput: GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition">GoogleCesAgentTransferRulesDisablePlannerTransferExpressionCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCesAgentTransferRulesDisablePlannerTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

---


### GoogleCesAgentTransferRulesList <a name="GoogleCesAgentTransferRulesList" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentTransferRulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.get"></a>

```typescript
public get(index: number): GoogleCesAgentTransferRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentTransferRules[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>[]

---


### GoogleCesAgentTransferRulesOutputReference <a name="GoogleCesAgentTransferRulesOutputReference" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer"></a>

```typescript
import { googleCesAgent } from '@cdktn/provider-google-beta'

new googleCesAgent.GoogleCesAgentTransferRulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDeterministicTransfer">putDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDisablePlannerTransfer">putDisablePlannerTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDeterministicTransfer">resetDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDisablePlannerTransfer">resetDisablePlannerTransfer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeterministicTransfer` <a name="putDeterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDeterministicTransfer"></a>

```typescript
public putDeterministicTransfer(value: GoogleCesAgentTransferRulesDeterministicTransfer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDeterministicTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

---

##### `putDisablePlannerTransfer` <a name="putDisablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDisablePlannerTransfer"></a>

```typescript
public putDisablePlannerTransfer(value: GoogleCesAgentTransferRulesDisablePlannerTransfer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.putDisablePlannerTransfer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

---

##### `resetDeterministicTransfer` <a name="resetDeterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDeterministicTransfer"></a>

```typescript
public resetDeterministicTransfer(): void
```

##### `resetDisablePlannerTransfer` <a name="resetDisablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.resetDisablePlannerTransfer"></a>

```typescript
public resetDisablePlannerTransfer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransfer">deterministicTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference">GoogleCesAgentTransferRulesDeterministicTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransfer">disablePlannerTransfer</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgentInput">childAgentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransferInput">deterministicTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransferInput">disablePlannerTransferInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgent">childAgent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deterministicTransfer`<sup>Required</sup> <a name="deterministicTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransfer"></a>

```typescript
public readonly deterministicTransfer: GoogleCesAgentTransferRulesDeterministicTransferOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransferOutputReference">GoogleCesAgentTransferRulesDeterministicTransferOutputReference</a>

---

##### `disablePlannerTransfer`<sup>Required</sup> <a name="disablePlannerTransfer" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransfer"></a>

```typescript
public readonly disablePlannerTransfer: GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference">GoogleCesAgentTransferRulesDisablePlannerTransferOutputReference</a>

---

##### `childAgentInput`<sup>Optional</sup> <a name="childAgentInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgentInput"></a>

```typescript
public readonly childAgentInput: string;
```

- *Type:* string

---

##### `deterministicTransferInput`<sup>Optional</sup> <a name="deterministicTransferInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.deterministicTransferInput"></a>

```typescript
public readonly deterministicTransferInput: GoogleCesAgentTransferRulesDeterministicTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDeterministicTransfer">GoogleCesAgentTransferRulesDeterministicTransfer</a>

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `disablePlannerTransferInput`<sup>Optional</sup> <a name="disablePlannerTransferInput" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.disablePlannerTransferInput"></a>

```typescript
public readonly disablePlannerTransferInput: GoogleCesAgentTransferRulesDisablePlannerTransfer;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesDisablePlannerTransfer">GoogleCesAgentTransferRulesDisablePlannerTransfer</a>

---

##### `childAgent`<sup>Required</sup> <a name="childAgent" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.childAgent"></a>

```typescript
public readonly childAgent: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCesAgentTransferRules;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleCesAgent.GoogleCesAgentTransferRules">GoogleCesAgentTransferRules</a>

---



