# `googleDiscoveryEngineWidgetConfig` Submodule <a name="`googleDiscoveryEngineWidgetConfig` Submodule" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDiscoveryEngineWidgetConfig <a name="GoogleDiscoveryEngineWidgetConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config google_discovery_engine_widget_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig(scope: Construct, id: string, config: GoogleDiscoveryEngineWidgetConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig">GoogleDiscoveryEngineWidgetConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig">GoogleDiscoveryEngineWidgetConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putAccessSettings">putAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putHomepageSetting">putHomepageSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putUiBranding">putUiBranding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putUiSettings">putUiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetAccessSettings">resetAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetCollectionId">resetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetHomepageSetting">resetHomepageSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetUiBranding">resetUiBranding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetUiSettings">resetUiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetWidgetConfigId">resetWidgetConfigId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessSettings` <a name="putAccessSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putAccessSettings"></a>

```typescript
public putAccessSettings(value: GoogleDiscoveryEngineWidgetConfigAccessSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putAccessSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings">GoogleDiscoveryEngineWidgetConfigAccessSettings</a>

---

##### `putHomepageSetting` <a name="putHomepageSetting" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putHomepageSetting"></a>

```typescript
public putHomepageSetting(value: GoogleDiscoveryEngineWidgetConfigHomepageSetting): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putHomepageSetting.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting">GoogleDiscoveryEngineWidgetConfigHomepageSetting</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDiscoveryEngineWidgetConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts">GoogleDiscoveryEngineWidgetConfigTimeouts</a>

---

##### `putUiBranding` <a name="putUiBranding" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putUiBranding"></a>

```typescript
public putUiBranding(value: GoogleDiscoveryEngineWidgetConfigUiBranding): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putUiBranding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding">GoogleDiscoveryEngineWidgetConfigUiBranding</a>

---

##### `putUiSettings` <a name="putUiSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putUiSettings"></a>

```typescript
public putUiSettings(value: GoogleDiscoveryEngineWidgetConfigUiSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.putUiSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings">GoogleDiscoveryEngineWidgetConfigUiSettings</a>

---

##### `resetAccessSettings` <a name="resetAccessSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetAccessSettings"></a>

```typescript
public resetAccessSettings(): void
```

##### `resetCollectionId` <a name="resetCollectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetCollectionId"></a>

```typescript
public resetCollectionId(): void
```

##### `resetHomepageSetting` <a name="resetHomepageSetting" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetHomepageSetting"></a>

```typescript
public resetHomepageSetting(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUiBranding` <a name="resetUiBranding" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetUiBranding"></a>

```typescript
public resetUiBranding(): void
```

##### `resetUiSettings` <a name="resetUiSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetUiSettings"></a>

```typescript
public resetUiSettings(): void
```

##### `resetWidgetConfigId` <a name="resetWidgetConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.resetWidgetConfigId"></a>

```typescript
public resetWidgetConfigId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleDiscoveryEngineWidgetConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isConstruct"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isTerraformElement"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isTerraformResource"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.generateConfigForImport"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GoogleDiscoveryEngineWidgetConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDiscoveryEngineWidgetConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDiscoveryEngineWidgetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GoogleDiscoveryEngineWidgetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.accessSettings">accessSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference">GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.homepageSetting">homepageSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference">GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference">GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiBranding">uiBranding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference">GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiSettings">uiSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference">GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.accessSettingsInput">accessSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings">GoogleDiscoveryEngineWidgetConfigAccessSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.engineIdInput">engineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.homepageSettingInput">homepageSettingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting">GoogleDiscoveryEngineWidgetConfigHomepageSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts">GoogleDiscoveryEngineWidgetConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiBrandingInput">uiBrandingInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding">GoogleDiscoveryEngineWidgetConfigUiBranding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiSettingsInput">uiSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings">GoogleDiscoveryEngineWidgetConfigUiSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.widgetConfigIdInput">widgetConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.engineId">engineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.widgetConfigId">widgetConfigId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accessSettings`<sup>Required</sup> <a name="accessSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.accessSettings"></a>

```typescript
public readonly accessSettings: GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference">GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference</a>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `homepageSetting`<sup>Required</sup> <a name="homepageSetting" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.homepageSetting"></a>

```typescript
public readonly homepageSetting: GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference">GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference">GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference</a>

---

##### `uiBranding`<sup>Required</sup> <a name="uiBranding" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiBranding"></a>

```typescript
public readonly uiBranding: GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference">GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference</a>

---

##### `uiSettings`<sup>Required</sup> <a name="uiSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiSettings"></a>

```typescript
public readonly uiSettings: GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference">GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference</a>

---

##### `accessSettingsInput`<sup>Optional</sup> <a name="accessSettingsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.accessSettingsInput"></a>

```typescript
public readonly accessSettingsInput: GoogleDiscoveryEngineWidgetConfigAccessSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings">GoogleDiscoveryEngineWidgetConfigAccessSettings</a>

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `engineIdInput`<sup>Optional</sup> <a name="engineIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.engineIdInput"></a>

```typescript
public readonly engineIdInput: string;
```

- *Type:* string

---

##### `homepageSettingInput`<sup>Optional</sup> <a name="homepageSettingInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.homepageSettingInput"></a>

```typescript
public readonly homepageSettingInput: GoogleDiscoveryEngineWidgetConfigHomepageSetting;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting">GoogleDiscoveryEngineWidgetConfigHomepageSetting</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDiscoveryEngineWidgetConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts">GoogleDiscoveryEngineWidgetConfigTimeouts</a>

---

##### `uiBrandingInput`<sup>Optional</sup> <a name="uiBrandingInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiBrandingInput"></a>

```typescript
public readonly uiBrandingInput: GoogleDiscoveryEngineWidgetConfigUiBranding;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding">GoogleDiscoveryEngineWidgetConfigUiBranding</a>

---

##### `uiSettingsInput`<sup>Optional</sup> <a name="uiSettingsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.uiSettingsInput"></a>

```typescript
public readonly uiSettingsInput: GoogleDiscoveryEngineWidgetConfigUiSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings">GoogleDiscoveryEngineWidgetConfigUiSettings</a>

---

##### `widgetConfigIdInput`<sup>Optional</sup> <a name="widgetConfigIdInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.widgetConfigIdInput"></a>

```typescript
public readonly widgetConfigIdInput: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `widgetConfigId`<sup>Required</sup> <a name="widgetConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.widgetConfigId"></a>

```typescript
public readonly widgetConfigId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDiscoveryEngineWidgetConfigAccessSettings <a name="GoogleDiscoveryEngineWidgetConfigAccessSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineWidgetConfigAccessSettings: googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.allowlistedDomains">allowlistedDomains</a></code> | <code>string[]</code> | List of domains that are allowed to integrate the search widget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.allowPublicAccess">allowPublicAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether public unauthenticated access is allowed. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.enableWebApp">enableWebApp</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether web app access is enabled. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.languageCode">languageCode</a></code> | <code>string</code> | Language code for user interface. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). If unset, the default language code is "en-US". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.workforceIdentityPoolProvider">workforceIdentityPoolProvider</a></code> | <code>string</code> | The workforce identity pool provider used to access the widget. |

---

##### `allowlistedDomains`<sup>Optional</sup> <a name="allowlistedDomains" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.allowlistedDomains"></a>

```typescript
public readonly allowlistedDomains: string[];
```

- *Type:* string[]

List of domains that are allowed to integrate the search widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#allowlisted_domains GoogleDiscoveryEngineWidgetConfig#allowlisted_domains}

---

##### `allowPublicAccess`<sup>Optional</sup> <a name="allowPublicAccess" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.allowPublicAccess"></a>

```typescript
public readonly allowPublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether public unauthenticated access is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#allow_public_access GoogleDiscoveryEngineWidgetConfig#allow_public_access}

---

##### `enableWebApp`<sup>Optional</sup> <a name="enableWebApp" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.enableWebApp"></a>

```typescript
public readonly enableWebApp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether web app access is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#enable_web_app GoogleDiscoveryEngineWidgetConfig#enable_web_app}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Language code for user interface. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). If unset, the default language code is "en-US".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#language_code GoogleDiscoveryEngineWidgetConfig#language_code}

---

##### `workforceIdentityPoolProvider`<sup>Optional</sup> <a name="workforceIdentityPoolProvider" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings.property.workforceIdentityPoolProvider"></a>

```typescript
public readonly workforceIdentityPoolProvider: string;
```

- *Type:* string

The workforce identity pool provider used to access the widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#workforce_identity_pool_provider GoogleDiscoveryEngineWidgetConfig#workforce_identity_pool_provider}

---

### GoogleDiscoveryEngineWidgetConfigConfig <a name="GoogleDiscoveryEngineWidgetConfigConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineWidgetConfigConfig: googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.engineId">engineId</a></code> | <code>string</code> | The engine ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.location">location</a></code> | <code>string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.accessSettings">accessSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings">GoogleDiscoveryEngineWidgetConfigAccessSettings</a></code> | access_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.collectionId">collectionId</a></code> | <code>string</code> | The collection ID. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.homepageSetting">homepageSetting</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting">GoogleDiscoveryEngineWidgetConfigHomepageSetting</a></code> | homepage_setting block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#id GoogleDiscoveryEngineWidgetConfig#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#project GoogleDiscoveryEngineWidgetConfig#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts">GoogleDiscoveryEngineWidgetConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.uiBranding">uiBranding</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding">GoogleDiscoveryEngineWidgetConfigUiBranding</a></code> | ui_branding block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.uiSettings">uiSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings">GoogleDiscoveryEngineWidgetConfigUiSettings</a></code> | ui_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.widgetConfigId">widgetConfigId</a></code> | <code>string</code> | The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `engineId`<sup>Required</sup> <a name="engineId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.engineId"></a>

```typescript
public readonly engineId: string;
```

- *Type:* string

The engine ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#engine_id GoogleDiscoveryEngineWidgetConfig#engine_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#location GoogleDiscoveryEngineWidgetConfig#location}

---

##### `accessSettings`<sup>Optional</sup> <a name="accessSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.accessSettings"></a>

```typescript
public readonly accessSettings: GoogleDiscoveryEngineWidgetConfigAccessSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings">GoogleDiscoveryEngineWidgetConfigAccessSettings</a>

access_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#access_settings GoogleDiscoveryEngineWidgetConfig#access_settings}

---

##### `collectionId`<sup>Optional</sup> <a name="collectionId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#collection_id GoogleDiscoveryEngineWidgetConfig#collection_id}

---

##### `homepageSetting`<sup>Optional</sup> <a name="homepageSetting" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.homepageSetting"></a>

```typescript
public readonly homepageSetting: GoogleDiscoveryEngineWidgetConfigHomepageSetting;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting">GoogleDiscoveryEngineWidgetConfigHomepageSetting</a>

homepage_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#homepage_setting GoogleDiscoveryEngineWidgetConfig#homepage_setting}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#id GoogleDiscoveryEngineWidgetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#project GoogleDiscoveryEngineWidgetConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDiscoveryEngineWidgetConfigTimeouts;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts">GoogleDiscoveryEngineWidgetConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#timeouts GoogleDiscoveryEngineWidgetConfig#timeouts}

---

##### `uiBranding`<sup>Optional</sup> <a name="uiBranding" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.uiBranding"></a>

```typescript
public readonly uiBranding: GoogleDiscoveryEngineWidgetConfigUiBranding;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding">GoogleDiscoveryEngineWidgetConfigUiBranding</a>

ui_branding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#ui_branding GoogleDiscoveryEngineWidgetConfig#ui_branding}

---

##### `uiSettings`<sup>Optional</sup> <a name="uiSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.uiSettings"></a>

```typescript
public readonly uiSettings: GoogleDiscoveryEngineWidgetConfigUiSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings">GoogleDiscoveryEngineWidgetConfigUiSettings</a>

ui_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#ui_settings GoogleDiscoveryEngineWidgetConfig#ui_settings}

---

##### `widgetConfigId`<sup>Optional</sup> <a name="widgetConfigId" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigConfig.property.widgetConfigId"></a>

```typescript
public readonly widgetConfigId: string;
```

- *Type:* string

The unique ID to use for the WidgetConfig. Currently only accepts "default_search_widget_config".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#widget_config_id GoogleDiscoveryEngineWidgetConfig#widget_config_id}

---

### GoogleDiscoveryEngineWidgetConfigHomepageSetting <a name="GoogleDiscoveryEngineWidgetConfigHomepageSetting" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineWidgetConfigHomepageSetting: googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting.property.shortcuts">shortcuts</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>[]</code> | shortcuts block. |

---

##### `shortcuts`<sup>Optional</sup> <a name="shortcuts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting.property.shortcuts"></a>

```typescript
public readonly shortcuts: IResolvable | GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>[]

shortcuts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#shortcuts GoogleDiscoveryEngineWidgetConfig#shortcuts}

---

### GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts <a name="GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineWidgetConfigHomepageSettingShortcuts: googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.destinationUri">destinationUri</a></code> | <code>string</code> | Destination URL of shortcut. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.icon">icon</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | icon block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.title">title</a></code> | <code>string</code> | Title of the shortcut. |

---

##### `destinationUri`<sup>Optional</sup> <a name="destinationUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.destinationUri"></a>

```typescript
public readonly destinationUri: string;
```

- *Type:* string

Destination URL of shortcut.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#destination_uri GoogleDiscoveryEngineWidgetConfig#destination_uri}

---

##### `icon`<sup>Optional</sup> <a name="icon" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.icon"></a>

```typescript
public readonly icon: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

icon block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#icon GoogleDiscoveryEngineWidgetConfig#icon}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title of the shortcut.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#title GoogleDiscoveryEngineWidgetConfig#title}

---

### GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon <a name="GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon: googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.property.url">url</a></code> | <code>string</code> | Image URL. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Image URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#url GoogleDiscoveryEngineWidgetConfig#url}

---

### GoogleDiscoveryEngineWidgetConfigTimeouts <a name="GoogleDiscoveryEngineWidgetConfigTimeouts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineWidgetConfigTimeouts: googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#create GoogleDiscoveryEngineWidgetConfig#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#delete GoogleDiscoveryEngineWidgetConfig#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#update GoogleDiscoveryEngineWidgetConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#create GoogleDiscoveryEngineWidgetConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#delete GoogleDiscoveryEngineWidgetConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#update GoogleDiscoveryEngineWidgetConfig#update}.

---

### GoogleDiscoveryEngineWidgetConfigUiBranding <a name="GoogleDiscoveryEngineWidgetConfigUiBranding" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineWidgetConfigUiBranding: googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding.property.logo">logo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo">GoogleDiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | logo block. |

---

##### `logo`<sup>Optional</sup> <a name="logo" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding.property.logo"></a>

```typescript
public readonly logo: GoogleDiscoveryEngineWidgetConfigUiBrandingLogo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo">GoogleDiscoveryEngineWidgetConfigUiBrandingLogo</a>

logo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#logo GoogleDiscoveryEngineWidgetConfig#logo}

---

### GoogleDiscoveryEngineWidgetConfigUiBrandingLogo <a name="GoogleDiscoveryEngineWidgetConfigUiBrandingLogo" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineWidgetConfigUiBrandingLogo: googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo.property.url">url</a></code> | <code>string</code> | Image URL. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Image URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#url GoogleDiscoveryEngineWidgetConfig#url}

---

### GoogleDiscoveryEngineWidgetConfigUiSettings <a name="GoogleDiscoveryEngineWidgetConfigUiSettings" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineWidgetConfigUiSettings: googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.dataStoreUiConfigs">dataStoreUiConfigs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>[]</code> | data_store_ui_configs block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.defaultSearchRequestOrderBy">defaultSearchRequestOrderBy</a></code> | <code>string</code> | The default ordering for search results if specified. Used to set SearchRequest#orderBy on applicable requests. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.disableUserEventsCollection">disableUserEventsCollection</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the widget will not collect user events. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableAutocomplete">enableAutocomplete</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether or not to enable autocomplete. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableCreateAgentButton">enableCreateAgentButton</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the widget will enable the create agent button. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enablePeopleSearch">enablePeopleSearch</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the widget will enable people search. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableQualityFeedback">enableQualityFeedback</a></code> | <code>boolean \| cdktn.IResolvable</code> | Turn on or off collecting the search result quality feedback from end users. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableSafeSearch">enableSafeSearch</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable safe search. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableSearchAsYouType">enableSearchAsYouType</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether to enable search-as-you-type behavior for the search widget. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableVisualContentSummary">enableVisualContentSummary</a></code> | <code>boolean \| cdktn.IResolvable</code> | If set to true, the widget will enable visual content summary on applicable search requests. Only used by healthcare search. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.generativeAnswerConfig">generativeAnswerConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | generative_answer_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.interactionType">interactionType</a></code> | <code>string</code> | Describes widget (or web app) interaction type Possible values: ["SEARCH_ONLY", "SEARCH_WITH_ANSWER", "SEARCH_WITH_FOLLOW_UPS"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.resultDescriptionType">resultDescriptionType</a></code> | <code>string</code> | Controls whether result extract is display and how (snippet or extractive answer). |

---

##### `dataStoreUiConfigs`<sup>Optional</sup> <a name="dataStoreUiConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.dataStoreUiConfigs"></a>

```typescript
public readonly dataStoreUiConfigs: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>[]

data_store_ui_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#data_store_ui_configs GoogleDiscoveryEngineWidgetConfig#data_store_ui_configs}

---

##### `defaultSearchRequestOrderBy`<sup>Optional</sup> <a name="defaultSearchRequestOrderBy" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.defaultSearchRequestOrderBy"></a>

```typescript
public readonly defaultSearchRequestOrderBy: string;
```

- *Type:* string

The default ordering for search results if specified. Used to set SearchRequest#orderBy on applicable requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#default_search_request_order_by GoogleDiscoveryEngineWidgetConfig#default_search_request_order_by}

---

##### `disableUserEventsCollection`<sup>Optional</sup> <a name="disableUserEventsCollection" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.disableUserEventsCollection"></a>

```typescript
public readonly disableUserEventsCollection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the widget will not collect user events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#disable_user_events_collection GoogleDiscoveryEngineWidgetConfig#disable_user_events_collection}

---

##### `enableAutocomplete`<sup>Optional</sup> <a name="enableAutocomplete" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableAutocomplete"></a>

```typescript
public readonly enableAutocomplete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether or not to enable autocomplete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#enable_autocomplete GoogleDiscoveryEngineWidgetConfig#enable_autocomplete}

---

##### `enableCreateAgentButton`<sup>Optional</sup> <a name="enableCreateAgentButton" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableCreateAgentButton"></a>

```typescript
public readonly enableCreateAgentButton: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the widget will enable the create agent button.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#enable_create_agent_button GoogleDiscoveryEngineWidgetConfig#enable_create_agent_button}

---

##### `enablePeopleSearch`<sup>Optional</sup> <a name="enablePeopleSearch" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enablePeopleSearch"></a>

```typescript
public readonly enablePeopleSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the widget will enable people search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#enable_people_search GoogleDiscoveryEngineWidgetConfig#enable_people_search}

---

##### `enableQualityFeedback`<sup>Optional</sup> <a name="enableQualityFeedback" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableQualityFeedback"></a>

```typescript
public readonly enableQualityFeedback: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Turn on or off collecting the search result quality feedback from end users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#enable_quality_feedback GoogleDiscoveryEngineWidgetConfig#enable_quality_feedback}

---

##### `enableSafeSearch`<sup>Optional</sup> <a name="enableSafeSearch" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableSafeSearch"></a>

```typescript
public readonly enableSafeSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable safe search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#enable_safe_search GoogleDiscoveryEngineWidgetConfig#enable_safe_search}

---

##### `enableSearchAsYouType`<sup>Optional</sup> <a name="enableSearchAsYouType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableSearchAsYouType"></a>

```typescript
public readonly enableSearchAsYouType: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether to enable search-as-you-type behavior for the search widget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#enable_search_as_you_type GoogleDiscoveryEngineWidgetConfig#enable_search_as_you_type}

---

##### `enableVisualContentSummary`<sup>Optional</sup> <a name="enableVisualContentSummary" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.enableVisualContentSummary"></a>

```typescript
public readonly enableVisualContentSummary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If set to true, the widget will enable visual content summary on applicable search requests. Only used by healthcare search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#enable_visual_content_summary GoogleDiscoveryEngineWidgetConfig#enable_visual_content_summary}

---

##### `generativeAnswerConfig`<sup>Optional</sup> <a name="generativeAnswerConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.generativeAnswerConfig"></a>

```typescript
public readonly generativeAnswerConfig: GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

generative_answer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#generative_answer_config GoogleDiscoveryEngineWidgetConfig#generative_answer_config}

---

##### `interactionType`<sup>Optional</sup> <a name="interactionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.interactionType"></a>

```typescript
public readonly interactionType: string;
```

- *Type:* string

Describes widget (or web app) interaction type Possible values: ["SEARCH_ONLY", "SEARCH_WITH_ANSWER", "SEARCH_WITH_FOLLOW_UPS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#interaction_type GoogleDiscoveryEngineWidgetConfig#interaction_type}

---

##### `resultDescriptionType`<sup>Optional</sup> <a name="resultDescriptionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings.property.resultDescriptionType"></a>

```typescript
public readonly resultDescriptionType: string;
```

- *Type:* string

Controls whether result extract is display and how (snippet or extractive answer).

Default to no result if unspecified. Possible values: ["SNIPPET", "EXTRACTIVE_ANSWER"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#result_description_type GoogleDiscoveryEngineWidgetConfig#result_description_type}

---

### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs: googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.facetField">facetField</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>[]</code> | facet_field block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.fieldsUiComponentsMap">fieldsUiComponentsMap</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>[]</code> | fields_ui_components_map block. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.name">name</a></code> | <code>string</code> | The name of the data store. |

---

##### `facetField`<sup>Optional</sup> <a name="facetField" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.facetField"></a>

```typescript
public readonly facetField: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>[]

facet_field block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#facet_field GoogleDiscoveryEngineWidgetConfig#facet_field}

---

##### `fieldsUiComponentsMap`<sup>Optional</sup> <a name="fieldsUiComponentsMap" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.fieldsUiComponentsMap"></a>

```typescript
public readonly fieldsUiComponentsMap: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>[]

fields_ui_components_map block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#fields_ui_components_map GoogleDiscoveryEngineWidgetConfig#fields_ui_components_map}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the data store.

It should be data store resource name. Format:
'projects/{project}/locations/{location}/collections/{collectionId}/dataStores/{dataStoreId}'.
For APIs under 'WidgetService', such as [WidgetService.LookUpWidgetConfig][],
the project number and location part is erased in this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#name GoogleDiscoveryEngineWidgetConfig#name}

---

### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField: googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.field">field</a></code> | <code>string</code> | Registered field name. The format is 'field.abc'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.displayName">displayName</a></code> | <code>string</code> | The field name that end users will see. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Registered field name. The format is 'field.abc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#field GoogleDiscoveryEngineWidgetConfig#field}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The field name that end users will see.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#display_name GoogleDiscoveryEngineWidgetConfig#display_name}

---

### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap: googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.field">field</a></code> | <code>string</code> | Registered field name. The format is 'field.abc'. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.uiComponent">uiComponent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#ui_component GoogleDiscoveryEngineWidgetConfig#ui_component}. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.deviceVisibility">deviceVisibility</a></code> | <code>string[]</code> | Possible values: ["MOBILE", "DESKTOP"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.displayTemplate">displayTemplate</a></code> | <code>string</code> | The template to customize how the field is displayed. |

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

Registered field name. The format is 'field.abc'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#field GoogleDiscoveryEngineWidgetConfig#field}

---

##### `uiComponent`<sup>Required</sup> <a name="uiComponent" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.uiComponent"></a>

```typescript
public readonly uiComponent: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#ui_component GoogleDiscoveryEngineWidgetConfig#ui_component}.

---

##### `deviceVisibility`<sup>Optional</sup> <a name="deviceVisibility" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.deviceVisibility"></a>

```typescript
public readonly deviceVisibility: string[];
```

- *Type:* string[]

Possible values: ["MOBILE", "DESKTOP"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#device_visibility GoogleDiscoveryEngineWidgetConfig#device_visibility}

---

##### `displayTemplate`<sup>Optional</sup> <a name="displayTemplate" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap.property.displayTemplate"></a>

```typescript
public readonly displayTemplate: string;
```

- *Type:* string

The template to customize how the field is displayed.

An example value would be a string that looks like: "Price: {value}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#display_template GoogleDiscoveryEngineWidgetConfig#display_template}

---

### GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

const googleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig: googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.disableRelatedQuestions">disableRelatedQuestions</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether generated answer contains suggested related questions. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreAdversarialQuery">ignoreAdversarialQuery</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to filter out queries that are adversarial. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreLowRelevantContent">ignoreLowRelevantContent</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to filter out queries that are not relevant to the content. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreNonAnswerSeekingQuery">ignoreNonAnswerSeekingQuery</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether to filter out queries that are not answer-seeking. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.imageSource">imageSource</a></code> | <code>string</code> | Source of image returned in the answer. Possible values: ["ALL_AVAILABLE_SOURCES", "CORPUS_IMAGE_ONLY", "FIGURE_GENERATION_ONLY"]. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.languageCode">languageCode</a></code> | <code>string</code> | Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.maxRephraseSteps">maxRephraseSteps</a></code> | <code>number</code> | Max rephrase steps. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelPromptPreamble">modelPromptPreamble</a></code> | <code>string</code> | Text at the beginning of the prompt that instructs the model that generates the answer. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelVersion">modelVersion</a></code> | <code>string</code> | The model version used to generate the answer. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.resultCount">resultCount</a></code> | <code>number</code> | The number of top results to generate the answer from. Up to 10. |

---

##### `disableRelatedQuestions`<sup>Optional</sup> <a name="disableRelatedQuestions" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.disableRelatedQuestions"></a>

```typescript
public readonly disableRelatedQuestions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether generated answer contains suggested related questions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#disable_related_questions GoogleDiscoveryEngineWidgetConfig#disable_related_questions}

---

##### `ignoreAdversarialQuery`<sup>Optional</sup> <a name="ignoreAdversarialQuery" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreAdversarialQuery"></a>

```typescript
public readonly ignoreAdversarialQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to filter out queries that are adversarial.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#ignore_adversarial_query GoogleDiscoveryEngineWidgetConfig#ignore_adversarial_query}

---

##### `ignoreLowRelevantContent`<sup>Optional</sup> <a name="ignoreLowRelevantContent" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreLowRelevantContent"></a>

```typescript
public readonly ignoreLowRelevantContent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to filter out queries that are not relevant to the content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#ignore_low_relevant_content GoogleDiscoveryEngineWidgetConfig#ignore_low_relevant_content}

---

##### `ignoreNonAnswerSeekingQuery`<sup>Optional</sup> <a name="ignoreNonAnswerSeekingQuery" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.ignoreNonAnswerSeekingQuery"></a>

```typescript
public readonly ignoreNonAnswerSeekingQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether to filter out queries that are not answer-seeking.

The default value is 'false'. No answer is returned if the search query
is classified as a non-answer seeking query.
If this field is set to 'true', we skip generating answers for
non-answer seeking queries and return fallback messages instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#ignore_non_answer_seeking_query GoogleDiscoveryEngineWidgetConfig#ignore_non_answer_seeking_query}

---

##### `imageSource`<sup>Optional</sup> <a name="imageSource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.imageSource"></a>

```typescript
public readonly imageSource: string;
```

- *Type:* string

Source of image returned in the answer. Possible values: ["ALL_AVAILABLE_SOURCES", "CORPUS_IMAGE_ONLY", "FIGURE_GENERATION_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#image_source GoogleDiscoveryEngineWidgetConfig#image_source}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Language code for Summary. Use language tags defined by [BCP47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Note: This is an experimental feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#language_code GoogleDiscoveryEngineWidgetConfig#language_code}

---

##### `maxRephraseSteps`<sup>Optional</sup> <a name="maxRephraseSteps" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.maxRephraseSteps"></a>

```typescript
public readonly maxRephraseSteps: number;
```

- *Type:* number

Max rephrase steps.

The max number is 5 steps. If not set or
set to < 1, it will be set to 1 by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#max_rephrase_steps GoogleDiscoveryEngineWidgetConfig#max_rephrase_steps}

---

##### `modelPromptPreamble`<sup>Optional</sup> <a name="modelPromptPreamble" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelPromptPreamble"></a>

```typescript
public readonly modelPromptPreamble: string;
```

- *Type:* string

Text at the beginning of the prompt that instructs the model that generates the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#model_prompt_preamble GoogleDiscoveryEngineWidgetConfig#model_prompt_preamble}

---

##### `modelVersion`<sup>Optional</sup> <a name="modelVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

The model version used to generate the answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#model_version GoogleDiscoveryEngineWidgetConfig#model_version}

---

##### `resultCount`<sup>Optional</sup> <a name="resultCount" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig.property.resultCount"></a>

```typescript
public readonly resultCount: number;
```

- *Type:* number

The number of top results to generate the answer from. Up to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/resources/google_discovery_engine_widget_config#result_count GoogleDiscoveryEngineWidgetConfig#result_count}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference <a name="GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowlistedDomains">resetAllowlistedDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowPublicAccess">resetAllowPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetEnableWebApp">resetEnableWebApp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetWorkforceIdentityPoolProvider">resetWorkforceIdentityPoolProvider</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowlistedDomains` <a name="resetAllowlistedDomains" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowlistedDomains"></a>

```typescript
public resetAllowlistedDomains(): void
```

##### `resetAllowPublicAccess` <a name="resetAllowPublicAccess" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetAllowPublicAccess"></a>

```typescript
public resetAllowPublicAccess(): void
```

##### `resetEnableWebApp` <a name="resetEnableWebApp" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetEnableWebApp"></a>

```typescript
public resetEnableWebApp(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetWorkforceIdentityPoolProvider` <a name="resetWorkforceIdentityPoolProvider" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.resetWorkforceIdentityPoolProvider"></a>

```typescript
public resetWorkforceIdentityPoolProvider(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomainsInput">allowlistedDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccessInput">allowPublicAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebAppInput">enableWebAppInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProviderInput">workforceIdentityPoolProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomains">allowlistedDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccess">allowPublicAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebApp">enableWebApp</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProvider">workforceIdentityPoolProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings">GoogleDiscoveryEngineWidgetConfigAccessSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowlistedDomainsInput`<sup>Optional</sup> <a name="allowlistedDomainsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomainsInput"></a>

```typescript
public readonly allowlistedDomainsInput: string[];
```

- *Type:* string[]

---

##### `allowPublicAccessInput`<sup>Optional</sup> <a name="allowPublicAccessInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccessInput"></a>

```typescript
public readonly allowPublicAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableWebAppInput`<sup>Optional</sup> <a name="enableWebAppInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebAppInput"></a>

```typescript
public readonly enableWebAppInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `workforceIdentityPoolProviderInput`<sup>Optional</sup> <a name="workforceIdentityPoolProviderInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProviderInput"></a>

```typescript
public readonly workforceIdentityPoolProviderInput: string;
```

- *Type:* string

---

##### `allowlistedDomains`<sup>Required</sup> <a name="allowlistedDomains" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowlistedDomains"></a>

```typescript
public readonly allowlistedDomains: string[];
```

- *Type:* string[]

---

##### `allowPublicAccess`<sup>Required</sup> <a name="allowPublicAccess" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.allowPublicAccess"></a>

```typescript
public readonly allowPublicAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableWebApp`<sup>Required</sup> <a name="enableWebApp" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.enableWebApp"></a>

```typescript
public readonly enableWebApp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `workforceIdentityPoolProvider`<sup>Required</sup> <a name="workforceIdentityPoolProvider" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.workforceIdentityPoolProvider"></a>

```typescript
public readonly workforceIdentityPoolProvider: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineWidgetConfigAccessSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigAccessSettings">GoogleDiscoveryEngineWidgetConfigAccessSettings</a>

---


### GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference <a name="GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts">putShortcuts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.resetShortcuts">resetShortcuts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putShortcuts` <a name="putShortcuts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts"></a>

```typescript
public putShortcuts(value: IResolvable | GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.putShortcuts.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>[]

---

##### `resetShortcuts` <a name="resetShortcuts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.resetShortcuts"></a>

```typescript
public resetShortcuts(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcuts">shortcuts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcutsInput">shortcutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting">GoogleDiscoveryEngineWidgetConfigHomepageSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shortcuts`<sup>Required</sup> <a name="shortcuts" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcuts"></a>

```typescript
public readonly shortcuts: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList</a>

---

##### `shortcutsInput`<sup>Optional</sup> <a name="shortcutsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.shortcutsInput"></a>

```typescript
public readonly shortcutsInput: IResolvable | GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineWidgetConfigHomepageSetting;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSetting">GoogleDiscoveryEngineWidgetConfigHomepageSetting</a>

---


### GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference <a name="GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

---


### GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList <a name="GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get"></a>

```typescript
public get(index: number): GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>[]

---


### GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference <a name="GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon">putIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetDestinationUri">resetDestinationUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetIcon">resetIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetTitle">resetTitle</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcon` <a name="putIcon" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon"></a>

```typescript
public putIcon(value: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.putIcon.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

---

##### `resetDestinationUri` <a name="resetDestinationUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetDestinationUri"></a>

```typescript
public resetDestinationUri(): void
```

##### `resetIcon` <a name="resetIcon" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetIcon"></a>

```typescript
public resetIcon(): void
```

##### `resetTitle` <a name="resetTitle" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.resetTitle"></a>

```typescript
public resetTitle(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.icon">icon</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUriInput">destinationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.iconInput">iconInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.titleInput">titleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUri">destinationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icon`<sup>Required</sup> <a name="icon" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.icon"></a>

```typescript
public readonly icon: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIconOutputReference</a>

---

##### `destinationUriInput`<sup>Optional</sup> <a name="destinationUriInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUriInput"></a>

```typescript
public readonly destinationUriInput: string;
```

- *Type:* string

---

##### `iconInput`<sup>Optional</sup> <a name="iconInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.iconInput"></a>

```typescript
public readonly iconInput: GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsIcon</a>

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.titleInput"></a>

```typescript
public readonly titleInput: string;
```

- *Type:* string

---

##### `destinationUri`<sup>Required</sup> <a name="destinationUri" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.destinationUri"></a>

```typescript
public readonly destinationUri: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts">GoogleDiscoveryEngineWidgetConfigHomepageSettingShortcuts</a>

---


### GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference <a name="GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts">GoogleDiscoveryEngineWidgetConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineWidgetConfigTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigTimeouts">GoogleDiscoveryEngineWidgetConfigTimeouts</a>

---


### GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference <a name="GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo">GoogleDiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineWidgetConfigUiBrandingLogo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo">GoogleDiscoveryEngineWidgetConfigUiBrandingLogo</a>

---


### GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference <a name="GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo">putLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.resetLogo">resetLogo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLogo` <a name="putLogo" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo"></a>

```typescript
public putLogo(value: GoogleDiscoveryEngineWidgetConfigUiBrandingLogo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.putLogo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo">GoogleDiscoveryEngineWidgetConfigUiBrandingLogo</a>

---

##### `resetLogo` <a name="resetLogo" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.resetLogo"></a>

```typescript
public resetLogo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logo">logo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference">GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logoInput">logoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo">GoogleDiscoveryEngineWidgetConfigUiBrandingLogo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding">GoogleDiscoveryEngineWidgetConfigUiBranding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logo`<sup>Required</sup> <a name="logo" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logo"></a>

```typescript
public readonly logo: GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference">GoogleDiscoveryEngineWidgetConfigUiBrandingLogoOutputReference</a>

---

##### `logoInput`<sup>Optional</sup> <a name="logoInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.logoInput"></a>

```typescript
public readonly logoInput: GoogleDiscoveryEngineWidgetConfigUiBrandingLogo;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingLogo">GoogleDiscoveryEngineWidgetConfigUiBrandingLogo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBrandingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineWidgetConfigUiBranding;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiBranding">GoogleDiscoveryEngineWidgetConfigUiBranding</a>

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get"></a>

```typescript
public get(index: number): GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>[]

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get"></a>

```typescript
public get(index: number): GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>[]

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDeviceVisibility">resetDeviceVisibility</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDisplayTemplate">resetDisplayTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeviceVisibility` <a name="resetDeviceVisibility" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDeviceVisibility"></a>

```typescript
public resetDeviceVisibility(): void
```

##### `resetDisplayTemplate` <a name="resetDisplayTemplate" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.resetDisplayTemplate"></a>

```typescript
public resetDisplayTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibilityInput">deviceVisibilityInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplateInput">displayTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fieldInput">fieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponentInput">uiComponentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibility">deviceVisibility</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplate">displayTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.field">field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponent">uiComponent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deviceVisibilityInput`<sup>Optional</sup> <a name="deviceVisibilityInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibilityInput"></a>

```typescript
public readonly deviceVisibilityInput: string[];
```

- *Type:* string[]

---

##### `displayTemplateInput`<sup>Optional</sup> <a name="displayTemplateInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplateInput"></a>

```typescript
public readonly displayTemplateInput: string;
```

- *Type:* string

---

##### `fieldInput`<sup>Optional</sup> <a name="fieldInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.fieldInput"></a>

```typescript
public readonly fieldInput: string;
```

- *Type:* string

---

##### `uiComponentInput`<sup>Optional</sup> <a name="uiComponentInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponentInput"></a>

```typescript
public readonly uiComponentInput: string;
```

- *Type:* string

---

##### `deviceVisibility`<sup>Required</sup> <a name="deviceVisibility" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.deviceVisibility"></a>

```typescript
public readonly deviceVisibility: string[];
```

- *Type:* string[]

---

##### `displayTemplate`<sup>Required</sup> <a name="displayTemplate" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.displayTemplate"></a>

```typescript
public readonly displayTemplate: string;
```

- *Type:* string

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.field"></a>

```typescript
public readonly field: string;
```

- *Type:* string

---

##### `uiComponent`<sup>Required</sup> <a name="uiComponent" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.uiComponent"></a>

```typescript
public readonly uiComponent: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get"></a>

```typescript
public get(index: number): GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>[]

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField">putFacetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap">putFieldsUiComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFacetField">resetFacetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFieldsUiComponentsMap">resetFieldsUiComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFacetField` <a name="putFacetField" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField"></a>

```typescript
public putFacetField(value: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFacetField.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>[]

---

##### `putFieldsUiComponentsMap` <a name="putFieldsUiComponentsMap" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap"></a>

```typescript
public putFieldsUiComponentsMap(value: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.putFieldsUiComponentsMap.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>[]

---

##### `resetFacetField` <a name="resetFacetField" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFacetField"></a>

```typescript
public resetFacetField(): void
```

##### `resetFieldsUiComponentsMap` <a name="resetFieldsUiComponentsMap" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetFieldsUiComponentsMap"></a>

```typescript
public resetFieldsUiComponentsMap(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetField">facetField</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMap">fieldsUiComponentsMap</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetFieldInput">facetFieldInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMapInput">fieldsUiComponentsMapInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `facetField`<sup>Required</sup> <a name="facetField" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetField"></a>

```typescript
public readonly facetField: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetFieldList</a>

---

##### `fieldsUiComponentsMap`<sup>Required</sup> <a name="fieldsUiComponentsMap" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMap"></a>

```typescript
public readonly fieldsUiComponentsMap: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMapList</a>

---

##### `facetFieldInput`<sup>Optional</sup> <a name="facetFieldInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.facetFieldInput"></a>

```typescript
public readonly facetFieldInput: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFacetField</a>[]

---

##### `fieldsUiComponentsMapInput`<sup>Optional</sup> <a name="fieldsUiComponentsMapInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.fieldsUiComponentsMapInput"></a>

```typescript
public readonly fieldsUiComponentsMapInput: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsFieldsUiComponentsMap</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetDisableRelatedQuestions">resetDisableRelatedQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreAdversarialQuery">resetIgnoreAdversarialQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreLowRelevantContent">resetIgnoreLowRelevantContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreNonAnswerSeekingQuery">resetIgnoreNonAnswerSeekingQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetImageSource">resetImageSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetMaxRephraseSteps">resetMaxRephraseSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelPromptPreamble">resetModelPromptPreamble</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelVersion">resetModelVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetResultCount">resetResultCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisableRelatedQuestions` <a name="resetDisableRelatedQuestions" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetDisableRelatedQuestions"></a>

```typescript
public resetDisableRelatedQuestions(): void
```

##### `resetIgnoreAdversarialQuery` <a name="resetIgnoreAdversarialQuery" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreAdversarialQuery"></a>

```typescript
public resetIgnoreAdversarialQuery(): void
```

##### `resetIgnoreLowRelevantContent` <a name="resetIgnoreLowRelevantContent" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreLowRelevantContent"></a>

```typescript
public resetIgnoreLowRelevantContent(): void
```

##### `resetIgnoreNonAnswerSeekingQuery` <a name="resetIgnoreNonAnswerSeekingQuery" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetIgnoreNonAnswerSeekingQuery"></a>

```typescript
public resetIgnoreNonAnswerSeekingQuery(): void
```

##### `resetImageSource` <a name="resetImageSource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetImageSource"></a>

```typescript
public resetImageSource(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetMaxRephraseSteps` <a name="resetMaxRephraseSteps" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetMaxRephraseSteps"></a>

```typescript
public resetMaxRephraseSteps(): void
```

##### `resetModelPromptPreamble` <a name="resetModelPromptPreamble" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelPromptPreamble"></a>

```typescript
public resetModelPromptPreamble(): void
```

##### `resetModelVersion` <a name="resetModelVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetModelVersion"></a>

```typescript
public resetModelVersion(): void
```

##### `resetResultCount` <a name="resetResultCount" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.resetResultCount"></a>

```typescript
public resetResultCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestionsInput">disableRelatedQuestionsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQueryInput">ignoreAdversarialQueryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContentInput">ignoreLowRelevantContentInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQueryInput">ignoreNonAnswerSeekingQueryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSourceInput">imageSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseStepsInput">maxRephraseStepsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreambleInput">modelPromptPreambleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersionInput">modelVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCountInput">resultCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestions">disableRelatedQuestions</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQuery">ignoreAdversarialQuery</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContent">ignoreLowRelevantContent</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQuery">ignoreNonAnswerSeekingQuery</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSource">imageSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseSteps">maxRephraseSteps</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreamble">modelPromptPreamble</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersion">modelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCount">resultCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disableRelatedQuestionsInput`<sup>Optional</sup> <a name="disableRelatedQuestionsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestionsInput"></a>

```typescript
public readonly disableRelatedQuestionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreAdversarialQueryInput`<sup>Optional</sup> <a name="ignoreAdversarialQueryInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQueryInput"></a>

```typescript
public readonly ignoreAdversarialQueryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreLowRelevantContentInput`<sup>Optional</sup> <a name="ignoreLowRelevantContentInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContentInput"></a>

```typescript
public readonly ignoreLowRelevantContentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreNonAnswerSeekingQueryInput`<sup>Optional</sup> <a name="ignoreNonAnswerSeekingQueryInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQueryInput"></a>

```typescript
public readonly ignoreNonAnswerSeekingQueryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `imageSourceInput`<sup>Optional</sup> <a name="imageSourceInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSourceInput"></a>

```typescript
public readonly imageSourceInput: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `maxRephraseStepsInput`<sup>Optional</sup> <a name="maxRephraseStepsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseStepsInput"></a>

```typescript
public readonly maxRephraseStepsInput: number;
```

- *Type:* number

---

##### `modelPromptPreambleInput`<sup>Optional</sup> <a name="modelPromptPreambleInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreambleInput"></a>

```typescript
public readonly modelPromptPreambleInput: string;
```

- *Type:* string

---

##### `modelVersionInput`<sup>Optional</sup> <a name="modelVersionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersionInput"></a>

```typescript
public readonly modelVersionInput: string;
```

- *Type:* string

---

##### `resultCountInput`<sup>Optional</sup> <a name="resultCountInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCountInput"></a>

```typescript
public readonly resultCountInput: number;
```

- *Type:* number

---

##### `disableRelatedQuestions`<sup>Required</sup> <a name="disableRelatedQuestions" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.disableRelatedQuestions"></a>

```typescript
public readonly disableRelatedQuestions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreAdversarialQuery`<sup>Required</sup> <a name="ignoreAdversarialQuery" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreAdversarialQuery"></a>

```typescript
public readonly ignoreAdversarialQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreLowRelevantContent`<sup>Required</sup> <a name="ignoreLowRelevantContent" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreLowRelevantContent"></a>

```typescript
public readonly ignoreLowRelevantContent: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreNonAnswerSeekingQuery`<sup>Required</sup> <a name="ignoreNonAnswerSeekingQuery" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.ignoreNonAnswerSeekingQuery"></a>

```typescript
public readonly ignoreNonAnswerSeekingQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `imageSource`<sup>Required</sup> <a name="imageSource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.imageSource"></a>

```typescript
public readonly imageSource: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `maxRephraseSteps`<sup>Required</sup> <a name="maxRephraseSteps" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.maxRephraseSteps"></a>

```typescript
public readonly maxRephraseSteps: number;
```

- *Type:* number

---

##### `modelPromptPreamble`<sup>Required</sup> <a name="modelPromptPreamble" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelPromptPreamble"></a>

```typescript
public readonly modelPromptPreamble: string;
```

- *Type:* string

---

##### `modelVersion`<sup>Required</sup> <a name="modelVersion" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.modelVersion"></a>

```typescript
public readonly modelVersion: string;
```

- *Type:* string

---

##### `resultCount`<sup>Required</sup> <a name="resultCount" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.resultCount"></a>

```typescript
public readonly resultCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

---


### GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference <a name="GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer"></a>

```typescript
import { googleDiscoveryEngineWidgetConfig } from '@cdktn/provider-google-beta'

new googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs">putDataStoreUiConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig">putGenerativeAnswerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDataStoreUiConfigs">resetDataStoreUiConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDefaultSearchRequestOrderBy">resetDefaultSearchRequestOrderBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDisableUserEventsCollection">resetDisableUserEventsCollection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableAutocomplete">resetEnableAutocomplete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableCreateAgentButton">resetEnableCreateAgentButton</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnablePeopleSearch">resetEnablePeopleSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableQualityFeedback">resetEnableQualityFeedback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSafeSearch">resetEnableSafeSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSearchAsYouType">resetEnableSearchAsYouType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableVisualContentSummary">resetEnableVisualContentSummary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetGenerativeAnswerConfig">resetGenerativeAnswerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetInteractionType">resetInteractionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetResultDescriptionType">resetResultDescriptionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataStoreUiConfigs` <a name="putDataStoreUiConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs"></a>

```typescript
public putDataStoreUiConfigs(value: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.putDataStoreUiConfigs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>[]

---

##### `putGenerativeAnswerConfig` <a name="putGenerativeAnswerConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig"></a>

```typescript
public putGenerativeAnswerConfig(value: GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.putGenerativeAnswerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

---

##### `resetDataStoreUiConfigs` <a name="resetDataStoreUiConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDataStoreUiConfigs"></a>

```typescript
public resetDataStoreUiConfigs(): void
```

##### `resetDefaultSearchRequestOrderBy` <a name="resetDefaultSearchRequestOrderBy" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDefaultSearchRequestOrderBy"></a>

```typescript
public resetDefaultSearchRequestOrderBy(): void
```

##### `resetDisableUserEventsCollection` <a name="resetDisableUserEventsCollection" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetDisableUserEventsCollection"></a>

```typescript
public resetDisableUserEventsCollection(): void
```

##### `resetEnableAutocomplete` <a name="resetEnableAutocomplete" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableAutocomplete"></a>

```typescript
public resetEnableAutocomplete(): void
```

##### `resetEnableCreateAgentButton` <a name="resetEnableCreateAgentButton" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableCreateAgentButton"></a>

```typescript
public resetEnableCreateAgentButton(): void
```

##### `resetEnablePeopleSearch` <a name="resetEnablePeopleSearch" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnablePeopleSearch"></a>

```typescript
public resetEnablePeopleSearch(): void
```

##### `resetEnableQualityFeedback` <a name="resetEnableQualityFeedback" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableQualityFeedback"></a>

```typescript
public resetEnableQualityFeedback(): void
```

##### `resetEnableSafeSearch` <a name="resetEnableSafeSearch" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSafeSearch"></a>

```typescript
public resetEnableSafeSearch(): void
```

##### `resetEnableSearchAsYouType` <a name="resetEnableSearchAsYouType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableSearchAsYouType"></a>

```typescript
public resetEnableSearchAsYouType(): void
```

##### `resetEnableVisualContentSummary` <a name="resetEnableVisualContentSummary" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetEnableVisualContentSummary"></a>

```typescript
public resetEnableVisualContentSummary(): void
```

##### `resetGenerativeAnswerConfig` <a name="resetGenerativeAnswerConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetGenerativeAnswerConfig"></a>

```typescript
public resetGenerativeAnswerConfig(): void
```

##### `resetInteractionType` <a name="resetInteractionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetInteractionType"></a>

```typescript
public resetInteractionType(): void
```

##### `resetResultDescriptionType` <a name="resetResultDescriptionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.resetResultDescriptionType"></a>

```typescript
public resetResultDescriptionType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigs">dataStoreUiConfigs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfig">generativeAnswerConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigsInput">dataStoreUiConfigsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderByInput">defaultSearchRequestOrderByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollectionInput">disableUserEventsCollectionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocompleteInput">enableAutocompleteInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButtonInput">enableCreateAgentButtonInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearchInput">enablePeopleSearchInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedbackInput">enableQualityFeedbackInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearchInput">enableSafeSearchInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouTypeInput">enableSearchAsYouTypeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummaryInput">enableVisualContentSummaryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfigInput">generativeAnswerConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionTypeInput">interactionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionTypeInput">resultDescriptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderBy">defaultSearchRequestOrderBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollection">disableUserEventsCollection</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocomplete">enableAutocomplete</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButton">enableCreateAgentButton</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearch">enablePeopleSearch</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedback">enableQualityFeedback</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearch">enableSafeSearch</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouType">enableSearchAsYouType</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummary">enableVisualContentSummary</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionType">interactionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionType">resultDescriptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings">GoogleDiscoveryEngineWidgetConfigUiSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataStoreUiConfigs`<sup>Required</sup> <a name="dataStoreUiConfigs" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigs"></a>

```typescript
public readonly dataStoreUiConfigs: GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigsList</a>

---

##### `generativeAnswerConfig`<sup>Required</sup> <a name="generativeAnswerConfig" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfig"></a>

```typescript
public readonly generativeAnswerConfig: GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfigOutputReference</a>

---

##### `dataStoreUiConfigsInput`<sup>Optional</sup> <a name="dataStoreUiConfigsInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.dataStoreUiConfigsInput"></a>

```typescript
public readonly dataStoreUiConfigsInput: IResolvable | GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs">GoogleDiscoveryEngineWidgetConfigUiSettingsDataStoreUiConfigs</a>[]

---

##### `defaultSearchRequestOrderByInput`<sup>Optional</sup> <a name="defaultSearchRequestOrderByInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderByInput"></a>

```typescript
public readonly defaultSearchRequestOrderByInput: string;
```

- *Type:* string

---

##### `disableUserEventsCollectionInput`<sup>Optional</sup> <a name="disableUserEventsCollectionInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollectionInput"></a>

```typescript
public readonly disableUserEventsCollectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableAutocompleteInput`<sup>Optional</sup> <a name="enableAutocompleteInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocompleteInput"></a>

```typescript
public readonly enableAutocompleteInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableCreateAgentButtonInput`<sup>Optional</sup> <a name="enableCreateAgentButtonInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButtonInput"></a>

```typescript
public readonly enableCreateAgentButtonInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePeopleSearchInput`<sup>Optional</sup> <a name="enablePeopleSearchInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearchInput"></a>

```typescript
public readonly enablePeopleSearchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableQualityFeedbackInput`<sup>Optional</sup> <a name="enableQualityFeedbackInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedbackInput"></a>

```typescript
public readonly enableQualityFeedbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSafeSearchInput`<sup>Optional</sup> <a name="enableSafeSearchInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearchInput"></a>

```typescript
public readonly enableSafeSearchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSearchAsYouTypeInput`<sup>Optional</sup> <a name="enableSearchAsYouTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouTypeInput"></a>

```typescript
public readonly enableSearchAsYouTypeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableVisualContentSummaryInput`<sup>Optional</sup> <a name="enableVisualContentSummaryInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummaryInput"></a>

```typescript
public readonly enableVisualContentSummaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `generativeAnswerConfigInput`<sup>Optional</sup> <a name="generativeAnswerConfigInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.generativeAnswerConfigInput"></a>

```typescript
public readonly generativeAnswerConfigInput: GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig">GoogleDiscoveryEngineWidgetConfigUiSettingsGenerativeAnswerConfig</a>

---

##### `interactionTypeInput`<sup>Optional</sup> <a name="interactionTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionTypeInput"></a>

```typescript
public readonly interactionTypeInput: string;
```

- *Type:* string

---

##### `resultDescriptionTypeInput`<sup>Optional</sup> <a name="resultDescriptionTypeInput" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionTypeInput"></a>

```typescript
public readonly resultDescriptionTypeInput: string;
```

- *Type:* string

---

##### `defaultSearchRequestOrderBy`<sup>Required</sup> <a name="defaultSearchRequestOrderBy" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.defaultSearchRequestOrderBy"></a>

```typescript
public readonly defaultSearchRequestOrderBy: string;
```

- *Type:* string

---

##### `disableUserEventsCollection`<sup>Required</sup> <a name="disableUserEventsCollection" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.disableUserEventsCollection"></a>

```typescript
public readonly disableUserEventsCollection: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableAutocomplete`<sup>Required</sup> <a name="enableAutocomplete" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableAutocomplete"></a>

```typescript
public readonly enableAutocomplete: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableCreateAgentButton`<sup>Required</sup> <a name="enableCreateAgentButton" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableCreateAgentButton"></a>

```typescript
public readonly enableCreateAgentButton: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enablePeopleSearch`<sup>Required</sup> <a name="enablePeopleSearch" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enablePeopleSearch"></a>

```typescript
public readonly enablePeopleSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableQualityFeedback`<sup>Required</sup> <a name="enableQualityFeedback" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableQualityFeedback"></a>

```typescript
public readonly enableQualityFeedback: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSafeSearch`<sup>Required</sup> <a name="enableSafeSearch" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSafeSearch"></a>

```typescript
public readonly enableSafeSearch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableSearchAsYouType`<sup>Required</sup> <a name="enableSearchAsYouType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableSearchAsYouType"></a>

```typescript
public readonly enableSearchAsYouType: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableVisualContentSummary`<sup>Required</sup> <a name="enableVisualContentSummary" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.enableVisualContentSummary"></a>

```typescript
public readonly enableVisualContentSummary: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `interactionType`<sup>Required</sup> <a name="interactionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.interactionType"></a>

```typescript
public readonly interactionType: string;
```

- *Type:* string

---

##### `resultDescriptionType`<sup>Required</sup> <a name="resultDescriptionType" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.resultDescriptionType"></a>

```typescript
public readonly resultDescriptionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDiscoveryEngineWidgetConfigUiSettings;
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleDiscoveryEngineWidgetConfig.GoogleDiscoveryEngineWidgetConfigUiSettings">GoogleDiscoveryEngineWidgetConfigUiSettings</a>

---



