# `googleFirebaseAiLogicConfig` Submodule <a name="`googleFirebaseAiLogicConfig` Submodule" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseAiLogicConfig <a name="GoogleFirebaseAiLogicConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config google_firebase_ai_logic_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer"></a>

```typescript
import { googleFirebaseAiLogicConfig } from '@cdktn/provider-google-beta'

new googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig(scope: Construct, id: string, config?: GoogleFirebaseAiLogicConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig">GoogleFirebaseAiLogicConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig">GoogleFirebaseAiLogicConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putGenerativeLanguageConfig">putGenerativeLanguageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTelemetryConfig">putTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTrafficFilter">putTrafficFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetGenerativeLanguageConfig">resetGenerativeLanguageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTelemetryConfig">resetTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTrafficFilter">resetTrafficFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGenerativeLanguageConfig` <a name="putGenerativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putGenerativeLanguageConfig"></a>

```typescript
public putGenerativeLanguageConfig(value: GoogleFirebaseAiLogicConfigGenerativeLanguageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putGenerativeLanguageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

---

##### `putTelemetryConfig` <a name="putTelemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTelemetryConfig"></a>

```typescript
public putTelemetryConfig(value: GoogleFirebaseAiLogicConfigTelemetryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTelemetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleFirebaseAiLogicConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a>

---

##### `putTrafficFilter` <a name="putTrafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTrafficFilter"></a>

```typescript
public putTrafficFilter(value: GoogleFirebaseAiLogicConfigTrafficFilter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.putTrafficFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetDeletionPolicy"></a>

```typescript
public resetDeletionPolicy(): void
```

##### `resetGenerativeLanguageConfig` <a name="resetGenerativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetGenerativeLanguageConfig"></a>

```typescript
public resetGenerativeLanguageConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTelemetryConfig` <a name="resetTelemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTelemetryConfig"></a>

```typescript
public resetTelemetryConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrafficFilter` <a name="resetTrafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.resetTrafficFilter"></a>

```typescript
public resetTrafficFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleFirebaseAiLogicConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isConstruct"></a>

```typescript
import { googleFirebaseAiLogicConfig } from '@cdktn/provider-google-beta'

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformElement"></a>

```typescript
import { googleFirebaseAiLogicConfig } from '@cdktn/provider-google-beta'

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformResource"></a>

```typescript
import { googleFirebaseAiLogicConfig } from '@cdktn/provider-google-beta'

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport"></a>

```typescript
import { googleFirebaseAiLogicConfig } from '@cdktn/provider-google-beta'

googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleFirebaseAiLogicConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleFirebaseAiLogicConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleFirebaseAiLogicConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseAiLogicConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfig">generativeLanguageConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference">GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference">GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference">GoogleFirebaseAiLogicConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilter">trafficFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference">GoogleFirebaseAiLogicConfigTrafficFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfigInput">generativeLanguageConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfigInput">telemetryConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilterInput">trafficFilterInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.project">project</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `generativeLanguageConfig`<sup>Required</sup> <a name="generativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfig"></a>

```typescript
public readonly generativeLanguageConfig: GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference">GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `telemetryConfig`<sup>Required</sup> <a name="telemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfig"></a>

```typescript
public readonly telemetryConfig: GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference">GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAiLogicConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference">GoogleFirebaseAiLogicConfigTimeoutsOutputReference</a>

---

##### `trafficFilter`<sup>Required</sup> <a name="trafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilter"></a>

```typescript
public readonly trafficFilter: GoogleFirebaseAiLogicConfigTrafficFilterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference">GoogleFirebaseAiLogicConfigTrafficFilterOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicyInput"></a>

```typescript
public readonly deletionPolicyInput: string;
```

- *Type:* string

---

##### `generativeLanguageConfigInput`<sup>Optional</sup> <a name="generativeLanguageConfigInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.generativeLanguageConfigInput"></a>

```typescript
public readonly generativeLanguageConfigInput: GoogleFirebaseAiLogicConfigGenerativeLanguageConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `telemetryConfigInput`<sup>Optional</sup> <a name="telemetryConfigInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.telemetryConfigInput"></a>

```typescript
public readonly telemetryConfigInput: GoogleFirebaseAiLogicConfigTelemetryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleFirebaseAiLogicConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a>

---

##### `trafficFilterInput`<sup>Optional</sup> <a name="trafficFilterInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.trafficFilterInput"></a>

```typescript
public readonly trafficFilterInput: GoogleFirebaseAiLogicConfigTrafficFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseAiLogicConfigConfig <a name="GoogleFirebaseAiLogicConfigConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.Initializer"></a>

```typescript
import { googleFirebaseAiLogicConfig } from '@cdktn/provider-google-beta'

const googleFirebaseAiLogicConfigConfig: googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.generativeLanguageConfig">generativeLanguageConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a></code> | generative_language_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#id GoogleFirebaseAiLogicConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.location">location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#project GoogleFirebaseAiLogicConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a></code> | telemetry_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.trafficFilter">trafficFilter</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a></code> | traffic_filter block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.deletionPolicy"></a>

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


Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#deletion_policy GoogleFirebaseAiLogicConfig#deletion_policy}

---

##### `generativeLanguageConfig`<sup>Optional</sup> <a name="generativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.generativeLanguageConfig"></a>

```typescript
public readonly generativeLanguageConfig: GoogleFirebaseAiLogicConfigGenerativeLanguageConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

generative_language_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#generative_language_config GoogleFirebaseAiLogicConfig#generative_language_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#id GoogleFirebaseAiLogicConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#location GoogleFirebaseAiLogicConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#project GoogleFirebaseAiLogicConfig#project}.

---

##### `telemetryConfig`<sup>Optional</sup> <a name="telemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.telemetryConfig"></a>

```typescript
public readonly telemetryConfig: GoogleFirebaseAiLogicConfigTelemetryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

telemetry_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#telemetry_config GoogleFirebaseAiLogicConfig#telemetry_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleFirebaseAiLogicConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#timeouts GoogleFirebaseAiLogicConfig#timeouts}

---

##### `trafficFilter`<sup>Optional</sup> <a name="trafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigConfig.property.trafficFilter"></a>

```typescript
public readonly trafficFilter: GoogleFirebaseAiLogicConfigTrafficFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

traffic_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#traffic_filter GoogleFirebaseAiLogicConfig#traffic_filter}

---

### GoogleFirebaseAiLogicConfigGenerativeLanguageConfig <a name="GoogleFirebaseAiLogicConfigGenerativeLanguageConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.Initializer"></a>

```typescript
import { googleFirebaseAiLogicConfig } from '@cdktn/provider-google-beta'

const googleFirebaseAiLogicConfigGenerativeLanguageConfig: googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKey">apiKey</a></code> | <code>string</code> | The value of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWo">apiKeyWo</a></code> | <code>string</code> | The value of the API key. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWoVersion">apiKeyWoVersion</a></code> | <code>string</code> | Triggers update of 'api_key_wo' write-only. |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

The value of the API key.

The API key must have
'generativelanguage.googleapis.com' in its "API restrictions" allowlist.
Note that this API is sometimes called the *Generative Language API* in
the Google Cloud console.

Do **not** add this Gemini API key into your app's codebase

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#api_key GoogleFirebaseAiLogicConfig#api_key}

---

##### `apiKeyWo`<sup>Optional</sup> <a name="apiKeyWo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWo"></a>

```typescript
public readonly apiKeyWo: string;
```

- *Type:* string

The value of the API key.

The API key must have
'generativelanguage.googleapis.com' in its "API restrictions" allowlist.
Note that this API is sometimes called the *Generative Language API* in
the Google Cloud console.

Do **not** add this Gemini API key into your app's codebase

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#api_key_wo GoogleFirebaseAiLogicConfig#api_key_wo}

---

##### `apiKeyWoVersion`<sup>Optional</sup> <a name="apiKeyWoVersion" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig.property.apiKeyWoVersion"></a>

```typescript
public readonly apiKeyWoVersion: string;
```

- *Type:* string

Triggers update of 'api_key_wo' write-only.

Increment this value when an update to 'api_key_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#api_key_wo_version GoogleFirebaseAiLogicConfig#api_key_wo_version}

---

### GoogleFirebaseAiLogicConfigTelemetryConfig <a name="GoogleFirebaseAiLogicConfigTelemetryConfig" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.Initializer"></a>

```typescript
import { googleFirebaseAiLogicConfig } from '@cdktn/provider-google-beta'

const googleFirebaseAiLogicConfigTelemetryConfig: googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.mode">mode</a></code> | <code>string</code> | The current monitoring mode used for this project. Possible values: NONE ALL. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.samplingRate">samplingRate</a></code> | <code>number</code> | The percentage of requests to be sampled, expressed as a fraction in the range (0,1]. |

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The current monitoring mode used for this project. Possible values: NONE ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#mode GoogleFirebaseAiLogicConfig#mode}

---

##### `samplingRate`<sup>Optional</sup> <a name="samplingRate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

The percentage of requests to be sampled, expressed as a fraction in the range (0,1].

Note that the actual sampling rate may be lower than
the specified value if the system is overloaded. Default is 1.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#sampling_rate GoogleFirebaseAiLogicConfig#sampling_rate}

---

### GoogleFirebaseAiLogicConfigTimeouts <a name="GoogleFirebaseAiLogicConfigTimeouts" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.Initializer"></a>

```typescript
import { googleFirebaseAiLogicConfig } from '@cdktn/provider-google-beta'

const googleFirebaseAiLogicConfigTimeouts: googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#create GoogleFirebaseAiLogicConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#delete GoogleFirebaseAiLogicConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#update GoogleFirebaseAiLogicConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#create GoogleFirebaseAiLogicConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#delete GoogleFirebaseAiLogicConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#update GoogleFirebaseAiLogicConfig#update}.

---

### GoogleFirebaseAiLogicConfigTrafficFilter <a name="GoogleFirebaseAiLogicConfigTrafficFilter" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter.Initializer"></a>

```typescript
import { googleFirebaseAiLogicConfig } from '@cdktn/provider-google-beta'

const googleFirebaseAiLogicConfigTrafficFilter: googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter.property.templateOnly">templateOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Only allows users to use AI Logic via prompt templates for this project. |

---

##### `templateOnly`<sup>Optional</sup> <a name="templateOnly" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter.property.templateOnly"></a>

```typescript
public readonly templateOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Only allows users to use AI Logic via prompt templates for this project.

If true, only calls using server templates are permitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_firebase_ai_logic_config#template_only GoogleFirebaseAiLogicConfig#template_only}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference <a name="GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAiLogicConfig } from '@cdktn/provider-google-beta'

new googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWo">resetApiKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWoVersion">resetApiKeyWoVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKey"></a>

```typescript
public resetApiKey(): void
```

##### `resetApiKeyWo` <a name="resetApiKeyWo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWo"></a>

```typescript
public resetApiKeyWo(): void
```

##### `resetApiKeyWoVersion` <a name="resetApiKeyWoVersion" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.resetApiKeyWoVersion"></a>

```typescript
public resetApiKeyWoVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoInput">apiKeyWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersionInput">apiKeyWoVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWo">apiKeyWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersion">apiKeyWoVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `apiKeyWoInput`<sup>Optional</sup> <a name="apiKeyWoInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoInput"></a>

```typescript
public readonly apiKeyWoInput: string;
```

- *Type:* string

---

##### `apiKeyWoVersionInput`<sup>Optional</sup> <a name="apiKeyWoVersionInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersionInput"></a>

```typescript
public readonly apiKeyWoVersionInput: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `apiKeyWo`<sup>Required</sup> <a name="apiKeyWo" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWo"></a>

```typescript
public readonly apiKeyWo: string;
```

- *Type:* string

---

##### `apiKeyWoVersion`<sup>Required</sup> <a name="apiKeyWoVersion" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.apiKeyWoVersion"></a>

```typescript
public readonly apiKeyWoVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAiLogicConfigGenerativeLanguageConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigGenerativeLanguageConfig">GoogleFirebaseAiLogicConfigGenerativeLanguageConfig</a>

---


### GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference <a name="GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAiLogicConfig } from '@cdktn/provider-google-beta'

new googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetSamplingRate">resetSamplingRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMode` <a name="resetMode" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetSamplingRate` <a name="resetSamplingRate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.resetSamplingRate"></a>

```typescript
public resetSamplingRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRateInput">samplingRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRate">samplingRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `samplingRateInput`<sup>Optional</sup> <a name="samplingRateInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRateInput"></a>

```typescript
public readonly samplingRateInput: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `samplingRate`<sup>Required</sup> <a name="samplingRate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.samplingRate"></a>

```typescript
public readonly samplingRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAiLogicConfigTelemetryConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTelemetryConfig">GoogleFirebaseAiLogicConfigTelemetryConfig</a>

---


### GoogleFirebaseAiLogicConfigTimeoutsOutputReference <a name="GoogleFirebaseAiLogicConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAiLogicConfig } from '@cdktn/provider-google-beta'

new googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleFirebaseAiLogicConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTimeouts">GoogleFirebaseAiLogicConfigTimeouts</a>

---


### GoogleFirebaseAiLogicConfigTrafficFilterOutputReference <a name="GoogleFirebaseAiLogicConfigTrafficFilterOutputReference" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer"></a>

```typescript
import { googleFirebaseAiLogicConfig } from '@cdktn/provider-google-beta'

new googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resetTemplateOnly">resetTemplateOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTemplateOnly` <a name="resetTemplateOnly" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.resetTemplateOnly"></a>

```typescript
public resetTemplateOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnlyInput">templateOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnly">templateOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateOnlyInput`<sup>Optional</sup> <a name="templateOnlyInput" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnlyInput"></a>

```typescript
public readonly templateOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `templateOnly`<sup>Required</sup> <a name="templateOnly" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.templateOnly"></a>

```typescript
public readonly templateOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleFirebaseAiLogicConfigTrafficFilter;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleFirebaseAiLogicConfig.GoogleFirebaseAiLogicConfigTrafficFilter">GoogleFirebaseAiLogicConfigTrafficFilter</a>

---



